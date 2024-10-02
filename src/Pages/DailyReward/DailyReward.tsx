import styles from "./DailyReward.module.css";
import { DAILY_REWARDS } from "../../utils/consts.ts";
import { userApi } from "../../main.tsx";
import { ScrollRestoration } from "react-router-dom";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import { useTranslation } from "react-i18next";
import RewardModule from "../../SharedUI/RewardModule/RewardModule.tsx";
import { useEffect, useState } from "react";

const DailyReward = () => {
  const { state, dispatch } = useAppState();
  const { t } = useTranslation();
  // const [consecutiveDays, setConsecutiveDays] = useState(0);

  console.log(state.user, "state.user?");

  useEffect(() => {
    userApi.checkDailyReward(state.user?.id, dispatch);
  }, []);

  if (!state.user) return;

  return (
    <div className={styles["daily-reward"]}>
      <h1 className={"page-title"}>{t("DailyReward")}</h1>
      <p className={styles["subtitle"]}>{t("DailyReward.Subtitle")}</p>
      <RewardModule
        rewardItems={DAILY_REWARDS}
        rewardAction={() => userApi.claimDailyReward(state.user, dispatch)}
        styles={styles}
        daysInRow={state.user.consecutiveDays}
        hasClaimedReward={state.user.hasClaimedToday}
      />

      {/*  <ul className={styles["daily-list"]}>*/}
      {/*    {DAILY_REWARDS.map((reward, index) => {*/}
      {/*      if (!state.user) return;*/}

      {/*      const isActive = index < state.user.consecutiveDays;*/}

      {/*      return (*/}
      {/*        <li*/}
      {/*          key={index}*/}
      {/*          className={` ${isActive ? styles["daily-item-active"] : styles["daily-item"]}`}*/}
      {/*        >*/}
      {/*          {t("Day")} {index + 1}*/}
      {/*          <img*/}
      {/*            src={dollarCoin}*/}
      {/*            alt="Dollar Coin"*/}
      {/*            className="w-[8vw] h-[8vw]"*/}
      {/*          />*/}
      {/*          {reward}*/}
      {/*        </li>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </ul>*/}
      {/*  <button*/}
      {/*    onClick={() => {*/}
      {/*      userApi.claimDailyReward(state.user, dispatch);*/}
      {/*    }}*/}
      {/*    className={`${styles["claim-button"]} ${state.user.hasClaimedToday ? styles["claim-button-disabled"] : ""}`}*/}
      {/*  >*/}
      {/*    {state.user.hasClaimedToday*/}
      {/*      ? t("DailyReward.ComebackTomorrow")*/}
      {/*      : t("DailyReward.Claim")}*/}
      {/*  </button>*/}
      {/*</div>*/}
      <ScrollRestoration />
    </div>
  );
};

export default DailyReward;
