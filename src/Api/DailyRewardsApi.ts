import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db, userApi } from "../main.tsx";
import { DAILY_REWARDS_BY_DAY } from "../utils/consts.ts";

class DailyRewardsApi {
  private userCollection = collection(db, "users");

  async userIsClaimedToday(userID: string) {
    try {
      const today = new Date();
      const localDateString = today.toLocaleDateString("en-CA");
      console.log(localDateString, "localDateString");

      const dailyRewardDocRef = doc(
        db,
        `users/${userID}/dailyRewards/${localDateString}`,
      );

      const dailyDoc = await getDoc(dailyRewardDocRef);

      return dailyDoc.exists();
    } catch (e) {
      console.log(e, "user is claimed error");
    }
  }

  getConsecutiveClaimedDays = async (userId) => {
    function normalizeDate(date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    const dailyRewardsRef = collection(db, `users/${userId}/dailyRewards`);
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

  claimDailyReward = async (user: any, dispatch: any) => {
    if (!user) return;

    try {
      const userID = user.id.toString();
      const today = new Date();
      // const todayString = today.toISOString().split("T")[0];
      const localDateString = today.toLocaleDateString("en-CA");

      const consecutiveDays = await this.getConsecutiveClaimedDays(userID);
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

      await setDoc(dailyRewardDocRef, {
        points: rewardPoints,
        claimed: true,
      });

      await userApi.updateUser(user.id.toString(), {
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
}

export default DailyRewardsApi;
