import styles from "./Skins.module.css";
import Slider from "./Slider/Slider.tsx";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PaymentModalSuccess from "./PaymentModal/PaymentModalSuccess.tsx";
import PaymentModalCanceled from "./PaymentModal/PaymentModalCanceled.tsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SKINS } from "../../utils/consts.ts";

const BACKGROUND_PATHS = {
  timber: "/timber-bg-skin.png",
  brickn: "/brickn-bg-skin.png",
  aztron: "/aztron-bg-skin.webp",
  brizzy: "/brizzy-bg-skin.webp",
  neyon: "/neyon-bg-skin.png",
  kyberon: "/kyberon-bg-skin.webp",
  mickey: "/mickey-bg-skin.png",
  intelion: "/intelion-bg-skin.png",
};

const Skins = () => {
  const [currentSkin, setCurrentSkin] = useState({ name: "timber", index: 0 });
  const [popupType, setPopupType] = useState("");
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false); // Reset loading state
    const img = new Image();
    img.src = BACKGROUND_PATHS[currentSkin.name];
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
            src={BACKGROUND_PATHS[currentSkin.name]}
            className={styles["background-image"]}
            alt={""}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Skins;
