import styles from "./DailyReward.module.css";
import { DAILY_REWARDS } from "../../utils/consts.ts";
import { dailyRewardsApi, userApi } from "../../main.tsx";
import { ScrollRestoration } from "react-router-dom";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import { useTranslation } from "react-i18next";
import RewardModule from "../../SharedUI/RewardModule/RewardModule.tsx";

const DailyReward = () => {
  const { state, dispatch } = useAppState();
  const { t } = useTranslation();
  // const [hasClaimedToday, setHasClaimedToday] = useState(false);
  // const [consecutiveDays, setConsecutiveDays] = useState(0);

  if (!state.user) return;

  return (
    <div className={styles["daily-reward"]}>
      <h1 className={"page-title"}>{t("DailyReward")}</h1>
      <p className={styles["subtitle"]}>{t("DailyReward.Subtitle")}</p>
      <RewardModule
        rewardItems={DAILY_REWARDS}
        rewardAction={() =>
          dailyRewardsApi.claimDailyReward(state.user, dispatch)
        }
        styles={styles}
        daysInRow={state.user.consecutiveDays}
        hasClaimedReward={state.user.hasClaimedToday}
      />
      <ScrollRestoration />
    </div>
  );
};

export default DailyReward;
