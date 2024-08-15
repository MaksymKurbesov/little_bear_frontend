import styles from "./Leaders.module.css";
import BronzeMedal from "../../images/medals/bronze-avatar.webp";
import SilverMedal from "../../images/medals/silver-avatar.webp";
import GoldMedal from "../../images/medals/gold-avatar.webp";
import Leader1 from "../../images/leaders/1.png";
import Leader2 from "../../images/leaders/2.png";
import Leader3 from "../../images/leaders/3.png";
import Background from "/leaders-bg.webp";
import { ScrollRestoration } from "react-router-dom";
import { useImagePreloader } from "../../hooks/useImagePreloader.ts";
import LoadSpinning from "../../SharedUI/LoadSpinning/LoadSpinning.tsx";
import { useTranslation } from "react-i18next";
import { useGetLeaderboardQuery } from "../../Stores/slices/apiSlice.ts";
import { useAppState } from "../../Stores/AppStateContext.tsx";

const imageUrls = [
  BronzeMedal,
  SilverMedal,
  GoldMedal,
  Background,
  Leader1,
  Leader2,
  Leader3,
];

const Leaders = () => {
  const imagesLoaded = useImagePreloader(imageUrls);
  const { t } = useTranslation();
  const { state } = useAppState();

  const {
    data: leaderboard,
    error,
    isLoading,
    refetch,
  } = useGetLeaderboardQuery(state.user?.id, {
    skip: !state.user?.id,
  });

  if (!imagesLoaded || isLoading) {
    return (
      <div className={"suspense"}>
        <LoadSpinning />
      </div>
    );
  }

  return (
    <>
      <div className={`${styles.leaders} main`}>
        <h1 className={"page-title"}>{t("Leaders.Title")}</h1>
        <p className={styles["subtitle"]}>{t("Leaders.Subtitle")}</p>
        <div className={styles["top3"]}>
          <div className={styles["silver"]}>
            <div className={styles["leader-avatar"]}>
              <div
                className={`${styles["generated-avatar"]} ${styles["generated-avatar3"]}`}
              >
                {leaderboard[0].leaderboard[1].username[0]}
              </div>
              <img src={SilverMedal} alt={""} width={90} />
            </div>
            <p className={styles["leader-nickname"]}>
              {leaderboard[0].leaderboard[1].username}
            </p>
            <span>{leaderboard[0].leaderboard[1].points}</span>
          </div>
          <div className={styles["gold"]}>
            <div className={styles["leader-avatar"]}>
              <div
                className={`${styles["generated-avatar"]} ${styles["generated-avatar1"]}`}
              >
                {leaderboard[0].leaderboard[0].username[0]}
              </div>
              <img src={GoldMedal} alt={""} width={90} />
            </div>
            <p className={styles["leader-nickname"]}>
              {leaderboard[0].leaderboard[0].username}
            </p>
            <span>{leaderboard[0].leaderboard[0].points}</span>
          </div>
          <div className={styles["bronze"]}>
            <div className={styles["leader-avatar"]}>
              <div
                className={`${styles["generated-avatar"]} ${styles["generated-avatar2"]}`}
              >
                {leaderboard[0].leaderboard[2].username[0]}
              </div>
              <img src={BronzeMedal} alt={""} width={90} />
            </div>
            <p className={styles["leader-nickname"]}>
              {leaderboard[0].leaderboard[2].username}
            </p>
            <span>{leaderboard[0].leaderboard[2].points}</span>
          </div>
        </div>
        <ul className={styles["leaders-list"]}>
          <li className={styles["headers"]}>
            <span>№</span> <p>{t("Leaders.Nickname")}</p>{" "}
            <p>{t("Leaders.Points")}</p>
          </li>
          {leaderboard[0].leaderboard.slice(3).map((leader, index) => {
            return (
              <li key={index}>
                <span>{index + 4}</span> <p>{leader.username}</p>{" "}
                <p>{leader.points}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Leaders;
