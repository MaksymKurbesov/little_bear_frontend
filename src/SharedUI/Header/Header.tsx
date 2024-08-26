import styles from "./Header.module.css";
import Settings from "../../icons/Settings";
import LittleBearIcon from "../../images/little-bear-icon.png";
import { NavLink } from "react-router-dom";
import ProgressBar from "./ProgressBar/ProgressBar.tsx";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import { useTranslation } from "react-i18next";
import NewsIcon from "../../icons/news-icon.svg?react";
import News from "../../Pages/News/News.tsx";

const Header = ({ pathname }) => {
  const isPlayPage = pathname === "/";
  const isAirdropPage = pathname === "/airdrop";
  const { state } = useAppState();
  const { t } = useTranslation();

  const isTransparentMenu = isPlayPage || isAirdropPage;

  if (!state.user) {
    return null;
  }

  return (
    <div
      className={`${styles["header"]} ${isTransparentMenu ? styles["transparent-header"] : ""}`}
    >
      <div className={styles["left-column"]}>
        <div className={styles["nickname"]}>
          <NavLink to={"/"}>
            <div className={styles["user-icon"]}>
              <img src={LittleBearIcon} alt={""} width={20} />
            </div>
          </NavLink>

          <div className={styles["info-wrapper"]}>
            <p>{state.user.username}</p>
            <NavLink to={"/skins"}>
              <ProgressBar points={state.user.points} />
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink className={styles["news"]} to={"/news"}>
        <img src={NewsIcon} alt={""} width={15} />
        <div>{t("News")}</div>
      </NavLink>

      {/*<DailyRewardHeader />*/}

      <NavLink to={"/settings"}>
        <div className={styles["settings"]}>
          <Settings />
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
