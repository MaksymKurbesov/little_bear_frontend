import { useTranslation } from "react-i18next";

const RewardModule = ({
  rewardItems,
  rewardAction,
  hasClaimedReward,
  styles,
  daysInRow,
  isOpen = true,
  closeHandler = null,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${isOpen ? styles["promo-opened"] : ""}`}>
      <div className={styles["promo-content"]}>
        <ul className={styles["reward-list"]}>
          {rewardItems.map((reward, index) => {
            const isActive = index < daysInRow;
            return (
              <li
                key={index}
                className={isActive ? styles["success"] : styles["reward-item"]}
              >
                {t("Day")} {index + 1}
                {reward.icon && <img src={reward.icon} alt="" width={35} />}
                {reward.reward}
              </li>
            );
          })}
        </ul>
        <button
          onClick={rewardAction}
          className={`${styles["button-claim"]} ${hasClaimedReward ? styles["claim-button-disabled"] : ""}`}
        >
          {hasClaimedReward ? t("Reward.Claimed") : t("Reward.Claim")}
        </button>
      </div>
      {closeHandler && (
        <div onClick={closeHandler} className={"close-button"}>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default RewardModule;
