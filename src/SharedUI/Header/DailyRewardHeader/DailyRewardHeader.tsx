import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../../utils/helpers.ts";
import styles from "./DailyRewardHeader.module.css";
import { NavLink } from "react-router-dom";
import { dailyReward } from "../../../images";
import { useAppState } from "../../../Stores/useAppState.ts";
import { useTranslation } from "react-i18next";
import { dailyRewardsApi, userApi } from "../../../main.tsx";

const DailyRewardHeader = () => {
  const { state } = useAppState();
  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const { t } = useTranslation();
  const [isClaimedToday, setIsClaimedToday] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft());
    };

    // const fetchIsClaimed = async () => {
    //   setLoading(true);
    //   const isClaimed = await dailyRewardsApi.userIsClaimedToday(
    //     String(state.user.id),
    //   );
    //   setIsClaimedToday(isClaimed);
    // };

    // fetchIsClaimed().then(() => setLoading(false));

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!state.user || loading) return;

  return (
    <div className={styles["daily-reward"]}>
      <NavLink to={"/daily-reward"} className={styles["daily-reward-link"]}>
        {!state.user.hasClaimedToday && <div className={styles["dot"]}></div>}

        <img
          src={dailyReward}
          alt="Daily Reward"
          className={styles["daily-icon"]}
        />
        <div className={styles["daily-text"]}>
          <p>{t("DailyReward")}</p>
          {state.user.hasClaimedToday ? (
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
