import { db } from "../main.tsx";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  increment,
  FieldValue,
  runTransaction,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { DAILY_REWARDS_BY_DAY } from "../utils/consts.ts";

export interface IReferral {
  username: string;
  points: number;
}

export interface IUser {
  id: number;
  username: string;
  consecutiveDays: number | FieldValue;
  lastClaimedDate?: string;
  points: number;
  referrals: IReferral[];
  hasClaimedToday: boolean;
  settings?: any;
}

class UserApi {
  private userCollection = collection(db, "users");

  async addUser(user: IUser): Promise<void> {
    try {
      const userRef = doc(this.userCollection, user.id.toString());
      await setDoc(userRef, user);
      console.log("UserService added successfully");
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  }

  async updateUser(userId: string, updatedData: Partial<IUser>): Promise<void> {
    try {
      const userRef = doc(this.userCollection, userId);
      await updateDoc(userRef, updatedData);
      console.log("UserService updated successfully");
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      const userRef = doc(this.userCollection, userId);
      await deleteDoc(userRef);
      console.log("UserService deleted successfully");
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  }

  async getUserPoints(userId: string): Promise<void> {
    try {
      const userRef = doc(this.userCollection, userId);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        return userDoc.data().points; //
      }
    } catch (error) {
      console.error("Error get user points: ", error);
    }
  }

  async addReferral(
    userId: string,
    referralId: string,
    isPremium: boolean,
  ): Promise<void> {
    try {
      const userRef = doc(this.userCollection, userId);
      const referralUserRef = doc(this.userCollection, referralId);

      await updateDoc(referralUserRef, {
        referrals: arrayUnion(userRef),
        points: isPremium ? increment(14000) : increment(7500),
      });

      await updateDoc(userRef, {
        points: isPremium ? increment(14000) : increment(7500),
      });
      console.log("Referral added successfully");
    } catch (error) {
      console.error("Error adding referral: ", error);
    }
  }

  async completeUserTask(userId: number, taskId: string, reward: number) {
    const userRef = doc(db, "users", userId.toString());

    try {
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();

        let userTasks = userData.tasks || [];

        // Ищем задачу в массиве
        const existingTaskIndex = userTasks.findIndex(
          (task: any) => task.id === taskId,
        );

        if (existingTaskIndex > -1) {
          // Обновляем существующую задачу
          userTasks[existingTaskIndex].completed = true;
          userTasks[existingTaskIndex].completionDate =
            new Date().toISOString();
        } else {
          // Добавляем новую задачу в массив
          userTasks.push({
            id: taskId,
            completed: true,
            completionDate: new Date().toISOString(),
          });
        }

        // Обновляем документ пользователя в Firestore
        await updateDoc(userRef, {
          tasks: userTasks,
          points: increment(reward),
        });

        console.log("Task completed successfully.");
      } else {
        console.error("User document not found.");
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  }

  async sendPointsToServer(userID: number, clickedPoints: number) {
    try {
      let newCount: number | null = null;
      const userRef = doc(db, "users", userID.toString());
      await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(userRef);
        if (!docSnap.exists()) {
          throw new Error("Документ не существует!");
        }

        newCount = docSnap.data().points + clickedPoints; //
        transaction.update(userRef, { points: newCount });
        console.log(`sending on server ${newCount}`);
      });
      return newCount;
    } catch (e) {
      console.log(e, "error");
    }
  }

  async checkDailyReward(id: string, dispatch: any): Promise<void> {
    try {
      const today = new Date();
      const localDateString = today.toLocaleDateString("en-CA");

      const dailyRewardDocRef = doc(
        db,
        "users",
        id.toString(),
        "dailyRewards",
        localDateString,
      );
      const dailyRewardDocSnap = await getDoc(dailyRewardDocRef);
      const isClaimed =
        dailyRewardDocSnap.exists() && dailyRewardDocSnap.data().claimed;

      dispatch({
        type: "UPDATE_USER_DATA",
        payload: {
          hasClaimedToday: isClaimed,
        },
      });
    } catch (error) {
      console.error("Error checking daily reward: ", error);
    }
  }

  async claimDailyReward(user: any, dispatch: any) {
    if (!user) return;

    const userID = user.id.toString();
    const today = new Date();
    // const todayString = today.toISOString().split("T")[0];
    const localDateString = today.toLocaleDateString("en-CA");

    const rewardPoints = DAILY_REWARDS_BY_DAY[user.consecutiveDays]; // Логика начисления очков
    const newTotalPoints = user.points + rewardPoints; //

    const dailyRewardDocRef = doc(
      db,
      "users",
      userID,
      "dailyRewards",
      localDateString,
    );

    const dailyRewardDocSnap = await getDoc(dailyRewardDocRef);

    if (dailyRewardDocSnap.exists() && dailyRewardDocSnap.data().claimed) {
      console.log("You have already claimed your daily reward today.");
      return;
    }

    try {
      await setDoc(dailyRewardDocRef, {
        points: rewardPoints,
        claimed: true,
      });

      await this.updateUser(user.id.toString(), {
        points: newTotalPoints,
        lastClaimedDate: localDateString,
        consecutiveDays: increment(1),
        hasClaimedToday: true,
      });

      dispatch({
        type: "UPDATE_USER_DATA",
        payload: {
          lastClaimedDate: localDateString,
          consecutiveDays: user.consecutiveDays + 1,
          hasClaimedToday: true,
        },
      });

      dispatch({
        type: "SET_USER_POINTS",
        payload: newTotalPoints,
      });

      console.log("Reward claimed successfully");
    } catch (err) {
      console.error("Failed to claim reward:", err);
    }
  }
}

export default UserApi;
