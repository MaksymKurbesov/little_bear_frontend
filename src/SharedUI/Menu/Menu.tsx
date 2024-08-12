import styles from "./Menu.module.css";
import { NavLink, useLocation } from "react-router-dom";
import LittleBearGoldenIcon from "../../images/little-bear-golden.png";
import PlayIcon from "../../icons/play.webp";
import FrensIcon from "../../icons/frens.webp";
import LeadersIcon from "../../icons/leadership.webp";
import TasksIcon from "../../icons/tasks.webp";
import { useTranslation } from "react-i18next";

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
        >
          <img src={PlayIcon} width={22} alt={""} height={32} />
          <span>{t("Menu.Bear")}</span>
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
            src={TasksIcon}
            width={16}
            height={32}
            alt={""}
            className={`${styles["icon"]}`}
          />
          <span>{t("Menu.Tasks")}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/referrals"}
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
        >
          <img
            src={FrensIcon}
            width={24}
            alt={""}
            className={`${styles["icon"]} ${styles["frens-icon"]}`}
          />
          <span>{t("Menu.Frens")}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/leaders"}
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
        >
          <img
            src={LeadersIcon}
            width={20}
            height={32}
            alt={""}
            className={`${styles["icon"]}`}
          />
          <span>{t("Menu.Leaders")}</span>
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
            alt="Airdrop"
            className={`${styles["icon"]} ${styles["airdrop-icon"]}`}
            width={24}
          />
          <span>Airdrop</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
