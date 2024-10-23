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

  async checkUserExists(userId: number) {
    const userDocRef = doc(db, "users", String(userId));
    const userDoc = await getDoc(userDocRef);

    return userDoc.exists();
  }
}

export default UserApi;
