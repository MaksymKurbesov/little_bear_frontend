import styles from "./Skins.module.css";
import Slider from "./Slider/Slider.tsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PaymentModalSuccess from "./PaymentModal/PaymentModalSuccess.tsx";
import PaymentModalCanceled from "./PaymentModal/PaymentModalCanceled.tsx";

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
  const [popupType, setPopupType] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setPopupType("success");
      document.body.style.overflow = "hidden";
    }

    if (query.get("canceled")) {
      setPopupType("canceled");
      document.body.style.overflow = "hidden";
    }
  }, []);

  return (
    <div
      className={`${styles["system-levels"]} ${styles[BACKGROUND[currentSkin]]}`}
    >
      {popupType === "success" && (
        <PaymentModalSuccess setPopupType={setPopupType} />
      )}

      {popupType === "canceled" && (
        <PaymentModalCanceled setPopupType={setPopupType} />
      )}

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
