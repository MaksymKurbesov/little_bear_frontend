import styles from "./SkinSlide.module.css";
import { useNavigate } from "react-router-dom";
import CartShopping from "../../../icons/cart-shopping-solid.svg";
import { useAppState } from "../../../Stores/useAppState.ts";
import { useEffect, useState } from "react";

const SkinSlide = ({
  skin,
  currentPoints,
  level,
  index,
  onSelectHandler,
  userSkinName,
}) => {
  const [isSkinBought, setIsSkinBought] = useState(false);
  const progress = (currentPoints / skin.requiredPoints) * 100;
  const { state } = useAppState();
  const isCurrentSkin = skin.id === level + 1;
  const isNextSkin = skin.id > level + 1;
  const navigate = useNavigate();

  useEffect(() => {
    if (state.user.skins) {
      setIsSkinBought(state.user.skins.includes(skin.name));
    }
  }, []);

  return (
    <div className={`${styles["slide"]} ${styles[skin.colorCN]}`}>
      <img
        src={index < level && !isSkinBought ? skin.openedImage : skin.image}
        alt={""}
        width={220}
        loading="lazy"
      />
      <div className={styles["info"]}>
        {isCurrentSkin && !skin.isPurchasable && (
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
      {isNextSkin && !skin.isPurchasable && (
        <p className={styles["experience"]}>from {skin.requiredPoints}</p>
      )}

      {level >= skin.requiredLevel && !skin.isPurchasable ? (
        <button
          onClick={onSelectHandler}
          className={`${styles["select-button"]} ${userSkinName === skin.name ? styles["selected-button"] : ""}`}
        >
          {userSkinName === skin.name ? "Selected" : "Select"}
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/checkout", {
              state: {
                name: skin.name,
                price: skin.price,
                stripeEndpoint: skin.stripeEndpoint,
              },
            });
          }}
          className={styles["buy-spins-button"]}
        >
          <img src={CartShopping} alt={""} width={15} />
          <span>BUY SKIN</span>
        </button>
      )}
      {/*{isSkinBought && (*/}
      {/*  <button*/}
      {/*    onClick={onSelectHandler}*/}
      {/*    className={`${styles["select-button"]} ${userSkinName === skin.name ? styles["selected-button"] : ""}`}*/}
      {/*  >*/}
      {/*    {userSkinName === skin.name ? "Selected" : "Select"}*/}
      {/*  </button>*/}
      {/*)}*/}
      {/*<div className="swiper-lazy-preloader"></div>*/}
    </div>
  );
};

export default SkinSlide;
