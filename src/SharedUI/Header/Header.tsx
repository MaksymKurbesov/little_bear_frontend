import styles from "./Header.module.css";
import Settings from "../../icons/Settings";
import LittleBearIcon from "../../images/little-bear-icon.png";
import { NavLink } from "react-router-dom";
import ProgressBar from "./ProgressBar/ProgressBar.tsx";
import { useAppState } from "../../Stores/useAppState.ts";
import { useTranslation } from "react-i18next";
import NewsIcon from "../../icons/news-icon.svg?react";
import News from "../../Pages/News/News.tsx";
import Leadership from "../../icons/new_icons/leadership.png";
import FriendsIcon from "../../icons/new_icons/friends.png";
import SettingsIcon from "../../icons/settings.svg";

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
      <div className={styles["buttons"]}>
        <NavLink to={"/leaders"}>
          <div className={styles["icon"]}>
            <img src={Leadership} width={35} alt={""} />
          </div>
          <span>Top</span>
        </NavLink>
        <NavLink to={"/referrals"}>
          <div className={styles["icon"]}>
            <img src={FriendsIcon} width={35} alt={""} />
          </div>
          <span>Friends</span>
        </NavLink>
        <NavLink to={"/settings"}>
          <div className={`${styles["icon"]} ${styles["settings-icon"]}`}>
            {/*<Settings />*/}
            <img src={SettingsIcon} />
          </div>
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
