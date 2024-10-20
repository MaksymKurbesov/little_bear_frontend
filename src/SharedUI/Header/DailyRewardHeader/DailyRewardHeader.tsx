import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../../utils/helpers.ts";
import styles from "./DailyRewardHeader.module.css";
import { NavLink } from "react-router-dom";
import { dailyReward } from "../../../images";
import { useAppState } from "../../../Stores/AppStateContext.tsx";
import { useTranslation } from "react-i18next";
import { userApi } from "../../../main.tsx";

const DailyRewardHeader = () => {
  const { state } = useAppState();
  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const { t } = useTranslation();
  const [isClaimedToday, setIsClaimedToday] = useState(false);

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft());
    };

    // const fetchClaimedToday = async () => {
    //   const isClaimed = await userApi.checkIfUserMissedToday(
    //     String(state.user.id),
    //     "ticketRewards",
    //   );
    //
    //   setIsClaimedToday(isClaimed);
    // };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!state.user) return;

  return (
    <div className={styles["daily-reward"]}>
      <NavLink to={"/daily-reward"} className={styles["daily-reward-link"]}>
        {!isClaimedToday && <div className={styles["dot"]}></div>}

        <img
          src={dailyReward}
          alt="Daily Reward"
          className={styles["daily-icon"]}
        />
        <div className={styles["daily-text"]}>
          <p>{t("DailyReward")}</p>
          {isClaimedToday ? (
            <p className={styles["claimed"]}>{t("Reward.Claimed")}!</p>
          ) : (
            <p>{dailyRewardTimeLeft}</p>
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default DailyRewardHeader;
