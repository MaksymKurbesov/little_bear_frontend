import styles from "./DailyReward.module.css";
import { dollarCoin } from "../../images";
import { DAILY_REWARDS } from "../../utils/consts.ts";

import { userApi } from "../../main.tsx";
import { ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import { useTranslation } from "react-i18next";

const DailyReward = () => {
  const { state, dispatch } = useAppState();
  const { t } = useTranslation();

  useEffect(() => {
    if (state.user) {
      userApi.checkDailyReward(state.user.id.toString(), dispatch);
    }
  }, []);

  if (!state.user) return;

  return (
    <>
      <div className={styles["daily-reward"]}>
        <h1 className={"page-title"}>{t("DailyReward")}</h1>
        <p className={styles["subtitle"]}>{t("DailyReward.Subtitle")}</p>
        <ul className={styles["daily-list"]}>
          {DAILY_REWARDS.map((reward, index) => {
            if (!state.user) return;

            const isActive = index < state.user.consecutiveDays;

            return (
              <li
                key={index}
                className={` ${isActive ? styles["daily-item-active"] : styles["daily-item"]}`}
              >
                {t("Day")} {index + 1}
                <img
                  src={dollarCoin}
                  alt="Dollar Coin"
                  className="w-[8vw] h-[8vw]"
                />
                {reward}
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            userApi.claimDailyReward(state.user, dispatch);
          }}
          className={`${styles["claim-button"]} ${state.user.hasClaimedToday ? styles["claim-button-disabled"] : ""}`}
        >
          {state.user.hasClaimedToday
            ? t("DailyReward.ComebackTomorrow")
            : t("DailyReward.Claim")}
        </button>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default DailyReward;
