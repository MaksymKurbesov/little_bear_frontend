import styles from "./SkinSlide.module.css";
import { userApi } from "../../../main.tsx";

const SkinSlide = ({
  skin,
  currentPoints,
  level,
  index,
  onSelectHandler,
  userSkinName,
}) => {
  const progress = (currentPoints / skin.requiredPoints) * 100;
  const isCurrentSkin = skin.id === level + 1;
  const isNextSkin = skin.id > level + 1;

  return (
    <div className={`${styles["slide"]} ${styles[skin.colorCN]}`}>
      <img
        src={index < level ? skin.openedImage : skin.image}
        alt={""}
        width={220}
        loading="lazy"
      />

      <div className={styles["info"]}>
        {isCurrentSkin && (
          <>
            <p className={styles["experience"]}>
              {currentPoints} / {skin.requiredPoints}
            </p>
            <div className={`${styles["progress-bar"]}`}>
              <div style={{ width: `${progress}%` }}></div>
            </div>
          </>
        )}
      </div>
      {/*{isPreviuosSkin && <p className={styles["unpacked"]}>Unpacked!</p>}*/}
      {isNextSkin && (
        <p className={styles["experience"]}>from {skin.requiredPoints}</p>
      )}
      {index < level && (
        <button
          onClick={onSelectHandler}
          className={`${styles["select-button"]} ${userSkinName === skin.name ? styles["selected-button"] : ""}`}
        >
          {userSkinName === skin.name ? "Selected" : "Select"}
        </button>
      )}
      {/*<div className="swiper-lazy-preloader"></div>*/}
    </div>
  );
};

export default SkinSlide;
