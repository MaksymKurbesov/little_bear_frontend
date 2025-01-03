import styles from "./Main.module.css";
import { useCallback, useState } from "react";
import { useAppState } from "../../Stores/useAppState.ts";
import Bear from "./Bear/Bear.tsx";
import { SKINS } from "../../utils/consts.ts";
import Points from "./Points/Points.tsx";
import LoadSpinning from "../../SharedUI/LoadSpinning/LoadSpinning.tsx";
import { NavLink } from "react-router-dom";
import FortuneWheelButton from "/fortune-wheel-button.png";
import MarketButton from "/market.png";
import Energy from "./Energy/Energy.tsx";
import LuckyDance from "./LuckyDance/LuckyDance.tsx";
// import FPSStats from "react-fps-stats";

const Main = () => {
  const { state, dispatch } = useAppState();
  const [promoIsOpen, setPromoIsOpen] = useState(false);
  // const imagesLoaded = useImagePreloader([BackgroundImage, BearIcon]);

  const handleAnimationEnd = useCallback((id: number) => {
    dispatch({ type: "REMOVE_CLICK", payload: id });
  }, []);

  if (!state.user) {
    return <LoadSpinning />;
  }

  return (
    <div className={styles["main"]}>
      <Points points={state.user.points} />
      {/*<Energy />*/}
      <Bear />

      <NavLink className={styles["fortune-wheel-button"]} to={"/fortune-wheel"}>
        <img src={FortuneWheelButton} alt={""} width={90} />
        <span>Fortune Wheel</span>
      </NavLink>

      {/*<NavLink to={"/market"} className={styles["market-button"]}>*/}
      {/*  <img src={MarketButton} alt={""} width={40} />*/}
      {/*  <span>Магазин</span>*/}
      {/*</NavLink>*/}

      {state.clicks.map((click) => (
        <div
          key={click.id}
          className={`${styles["earned-points"]} absolute text-5xl font-bold opacity-0 text-white pointer-events-none`}
          style={{
            top: `${click.y - 50}px`,
            left: `${click.x - 50}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {/*+{POINTS_TO_ADD[state.currentSkin]}*/}+
          {SKINS.find((skin) => skin.name === state.currentSkin).points}
        </div>
      ))}
      {/*<FPSStats top="10px" right="10px" />*/}
    </div>
  );
};

export default Main;
