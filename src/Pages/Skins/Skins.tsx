import styles from "./Skins.module.css";
import Slider from "./Slider/Slider.tsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const BACKGROUND = [
  "bg-skin-1",
  "bg-skin-2",
  "bg-skin-3",
  "bg-skin-4",
  "bg-skin-5",
  "kyberon-bg",
  "bg-skin-6",
  "bg-skin-7",
];

const Skins = () => {
  const [currentSkin, setCurrentSkin] = useState(0);
  const { t } = useTranslation();

  console.log(currentSkin, "currentSkin");

  return (
    <div
      className={`${styles["system-levels"]} ${styles[BACKGROUND[currentSkin]]}`}
    >
      <div className={styles["title-wrapper"]}>
        <h1 className={"page-title"}>{t("Skins.Title")}</h1>
        <p className={styles["subtitle"]}>{t("Skins.Subtitle")}</p>
      </div>

      <div className={styles["slider-wrapper"]}>
        <Slider setCurrentSkin={setCurrentSkin} currentSkin={currentSkin} />
      </div>
    </div>
  );
};

export default Skins;
