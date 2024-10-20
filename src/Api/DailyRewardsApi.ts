import { collection } from "firebase/firestore";
import { db } from "../main.tsx";

class DailyRewardsApi {
  private userCollection = collection(db, "users");
}

export default DailyRewardsApi;
