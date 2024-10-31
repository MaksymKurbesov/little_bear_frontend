import styles from "./Menu.module.css";
import { NavLink, useLocation } from "react-router-dom";
import LittleBearGoldenIcon from "../../images/little-bear-golden.png";
import PlayIcon from "../../icons/play.webp";
import FrensIcon from "../../icons/frens.webp";
import LeadersIcon from "../../icons/leadership.webp";
import TasksIcon from "../../icons/tasks.webp";
import { useTranslation } from "react-i18next";

import TasksIcon2 from "../../icons/new_icons/tasks.png";
import PlayIcon2 from "../../icons/new_icons/home.png";
import BearsIcon from "../../icons/new_icons/bears.png";
import LeadersIcon2 from "../../icons/new_icons/leadership.png";
import FrensIcon2 from "../../icons/new_icons/friends.png";
import NewsIcon from "../../icons/news-icon.svg";

const Menu = () => {
  const location = useLocation();
  const isPlayPage = location.pathname === "/";
  const isAirdropPage = location.pathname === "/airdrop";
  const isSkinsPage = location.pathname === "/skins";
  const { t } = useTranslation();

  const isTransparentMenu = isPlayPage || isAirdropPage;

  return (
    <ul
      className={`${styles.menu} ${isTransparentMenu ? styles["transparent-menu"] : ""}`}
    >
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
          // reloadDocument
        >
          <img src={PlayIcon2} width={28} alt={""} height={28} />
          {/*<span>{t("Menu.Bear")}</span>*/}
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/tasks"}
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
        >
          <img
            src={TasksIcon2}
            width={30}
            // height={32}
            alt={""}
            className={`${styles["icon"]}`}
          />
          {/*<span>{t("Menu.Tasks")}</span>*/}
          <span>Tasks</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/airdrop"}
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
        >
          <img
            src={LittleBearGoldenIcon}
            width={30}
            height={30}
            alt={""}
            className={`${styles["icon"]} ${styles["frens-icon"]}`}
          />
          <span>Airdrop</span>
          {/*<span>{t("Menu.Frens")}</span>*/}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/skins"}
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
        >
          <img
            src={BearsIcon}
            width={30}
            height={30}
            alt={""}
            className={`${styles["icon"]}`}
          />
          {/*<span>{t("Menu.Leaders")}</span>*/}
          <span>Bears</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/news"}
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
        >
          <img
            src={NewsIcon}
            alt="Airdrop"
            className={`${styles["icon"]} ${styles["news-icon"]}`}
            width={30}
            height={30}
          />
          <span>News</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
