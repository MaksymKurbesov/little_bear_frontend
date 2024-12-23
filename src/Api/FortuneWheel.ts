import {
  arrayUnion,
  collection,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "../main.tsx";

class FortuneWheelApi {
  private userCollection = collection(db, "users");

  constructor() {}

  async addSilverTicket(userId: string) {
    const userRef = doc(this.userCollection, userId);

    await updateDoc(userRef, {
      silverTicket: increment(1),
    });
  }

  async addGoldTicket(userId: string) {
    const userRef = doc(this.userCollection, userId);

    await updateDoc(userRef, {
      goldTicket: increment(1),
    });
  }

  async addBear(userId: string) {
    const userRef = doc(this.userCollection, userId);

    await updateDoc(userRef, {
      skins: arrayUnion("mickey"),
    });
  }
}

export default FortuneWheelApi;
