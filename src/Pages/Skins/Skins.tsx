import styles from "./Skins.module.css";
import Slider from "./Slider/Slider.tsx";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PaymentModalSuccess from "./PaymentModal/PaymentModalSuccess.tsx";
import PaymentModalCanceled from "./PaymentModal/PaymentModalCanceled.tsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const BACKGROUND_PATHS = {
  0: "/bg1-skin.png",
  1: "/bg2-skin.png",
  2: "/bg3-skin.webp",
  3: "/bg4-skin.webp",
  4: "/bg5-skin.png",
  5: "/kyberon-bg-skin.webp",
  6: "/bg6-skin.png",
};

const Skins = () => {
  const [currentSkin, setCurrentSkin] = useState(0);
  const [popupType, setPopupType] = useState("");
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false); // Reset loading state
    const img = new Image();
    img.src = BACKGROUND_PATHS[currentSkin];
    img.onload = () => setIsImageLoaded(true);
  }, [currentSkin]);

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

  const nodeRef = useRef(null);

  return (
    <div className={`${styles["system-levels"]}`}>
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
        <Slider
          setCurrentSkin={setCurrentSkin}
          currentSkin={currentSkin}
          isImageLoaded={isImageLoaded}
        />
      </div>
      <TransitionGroup>
        <CSSTransition
          key={currentSkin} // уникальный ключ для обновления компонента
          timeout={500} // время в миллисекундах
          classNames={{
            enter: styles["background-image-enter"],
            enterActive: styles["background-image-enter-active"],
            exit: styles["background-image-exit"],
            exitActive: styles["background-image-exit-active"],
          }}
        >
          <img
            src={BACKGROUND_PATHS[currentSkin]}
            className={styles["background-image"]}
            alt={""}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Skins;
