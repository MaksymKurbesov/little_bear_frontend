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
  tickets?: number | FieldValue;
  lastTicketClaimedDate?: string;
  ticketConsecutiveDays?: number | FieldValue;
  hasClaimedTicketToday?: boolean;
  skin?: string;
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

  async setUserSkin(userId, skin) {
    try {
      const userRef = doc(this.userCollection, String(userId));
      await updateDoc(userRef, {
        skin,
      });
      console.log("UserService updated successfully");
    } catch (error) {
      console.error("Error set user skin: ", error);
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

  checkIfUserMissedToday = async (userID: string, type: string) => {
    try {
      const today = new Date();
      const todayString = today.toISOString().split("T")[0]; // Получаем строку в формате "YYYY-MM-DD"

      console.log(todayString, "todayString");

      const dailyRewardsRef = collection(db, `users/${userID}/${type}`);
      const docRef = doc(dailyRewardsRef, todayString); // Проверяем наличие документа с сегодняшней датой

      const docSnapshot = await getDoc(docRef);

      // Если документа с сегодняшней датой нет, значит награда не была забрана
      return docSnapshot.exists();

      // Награда уже была забрана
    } catch (error) {
      console.error("Error checking today's reward: ", error);
      return false; // В случае ошибки вернём false
    }
  };

  checkDailyReward = async (id: string, dispatch: any): Promise<void> => {
    try {
      const today = new Date();
      const localDateString = today.toLocaleDateString("en-CA");
      const consecutiveDays = await this.getConsecutiveClaimedDays(
        id,
        "dailyRewards",
      );

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
          consecutiveDays,
        },
      });
    } catch (error) {
      console.error("Error checking daily reward: ", error);
    }
  };

  claimDailyReward = async (user: any, dispatch: any) => {
    if (!user) return;

    const userID = user.id.toString();
    const today = new Date();
    // const todayString = today.toISOString().split("T")[0];
    const localDateString = today.toLocaleDateString("en-CA");

    const consecutiveDays = await this.getConsecutiveClaimedDays(
      userID,
      "dailyReward",
    );
    const rewardPoints = DAILY_REWARDS_BY_DAY[consecutiveDays]; // Логика начисления очков
    const newTotalPoints = user.points + rewardPoints; //

    const dailyRewardDocRef = doc(
      db,
      `users/${userID}/dailyRewards/${localDateString}`,
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
        hasClaimedToday: true,
      });

      dispatch({
        type: "UPDATE_USER_DATA",
        payload: {
          consecutiveDays: consecutiveDays + 1,
          hasClaimedToday: true,
        },
      });

      console.log("Reward claimed successfully");
    } catch (err) {
      console.error("Failed to claim reward:", err);
    }
  };

  getConsecutiveClaimedDays = async (userId, type) => {
    function normalizeDate(date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    const dailyRewardsRef = collection(db, `users/${userId}/${type}`);
    const snapshot = await getDocs(dailyRewardsRef);

    let claimedDates = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.claimed) {
        claimedDates.push(doc.id); // doc.id содержит дату в формате "YYYY-MM-DD"
      }
    });

    // Преобразуем строки дат в объекты Date
    let claimedDateObjects = claimedDates.map((dateStr) => {
      const [year, month, day] = dateStr.split("-").map(Number);
      return new Date(year, month - 1, day);
    });

    // Сортируем даты в порядке убывания (от последней к первой)
    claimedDateObjects.sort((a, b) => b - a);

    if (claimedDateObjects.length === 0) {
      return 0; // Нет полученных наград
    }

    let consecutiveDays = 1;
    const today = normalizeDate(new Date());
    const mostRecentDate = normalizeDate(claimedDateObjects[0]);

    // Проверяем, продолжается ли серия сегодня или была прервана
    const dateDifference = (today - mostRecentDate) / (1000 * 60 * 60 * 24);

    if (dateDifference > 1) {
      // Серия прервана
      return 0;
    } else if (dateDifference < 0) {
      // Дата в будущем — ошибка данных
      return 0;
    }

    // Проверяем предыдущие даты на последовательность
    for (let i = 1; i < claimedDateObjects.length; i++) {
      const previousDate = normalizeDate(claimedDateObjects[i - 1]);
      const currentDate = normalizeDate(claimedDateObjects[i]);
      const diffDays = (previousDate - currentDate) / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        consecutiveDays++;
      } else {
        // Серия прервана
        break;
      }
    }

    return consecutiveDays;
  };

  async checkUserExists(userId: number) {
    const userDocRef = doc(db, "users", String(userId));
    const userDoc = await getDoc(userDocRef);

    return userDoc.exists();
  }

  async claimTicket(user: any, dispatch: any) {
    if (!user) return;

    const userID = user.id.toString();
    const today = new Date();
    // const todayString = today.toISOString().split("T")[0];
    const localDateString = today.toLocaleDateString("en-CA");

    const ticketRewardDocRef = doc(
      db,
      "users",
      userID,
      "ticketRewards",
      localDateString,
    );

    const ticketRewardDocSnap = await getDoc(ticketRewardDocRef);

    if (ticketRewardDocSnap.exists() && ticketRewardDocSnap.data().claimed) {
      console.log("You have already claimed your daily reward today.");
      return;
    }

    try {
      await setDoc(ticketRewardDocRef, {
        tickets: 1,
        claimed: true,
      });

      await this.updateUser(user.id.toString(), {
        tickets: increment(1),
      });

      console.log("Reward claimed successfully");
    } catch (err) {
      console.error("Failed to claim reward:", err);
    }
  }
}

export default UserApi;
