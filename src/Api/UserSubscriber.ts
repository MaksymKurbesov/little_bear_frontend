import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../main.tsx";

export const subscribeToUserChanges = (userId, dispatch) => {
  const userDocRef = doc(db, "users", String(userId));

  return onSnapshot(userDocRef, (snapshot) => {
    if (snapshot.exists()) {
      dispatch({ type: "SET_USER", payload: snapshot.data() });
    } else {
      dispatch({ type: "SET_USER", payload: "null" });
      // callback(null);
    }
  });
};
