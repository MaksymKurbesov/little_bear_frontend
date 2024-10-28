import styles from "./FortuneWheel.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import SilverTicket from "/silver-ticket.webp";
import GoldTicket from "/gold-ticket.webp";
import FortuneScene from "./FortuneScene.tsx";
import { Canvas } from "@react-three/fiber";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import { AnimationAction } from "three";
import CameraHelper from "./CameraHelper.tsx";
import { Perf } from "r3f-perf";
import { chooseSegment } from "../../utils/helpers.ts";
import { SEGMENTS } from "../../utils/consts.ts";
import { useSpring } from "@react-spring/core";
import { fortuneWheelApi, userApi } from "../../main.tsx";
import ListIcon from "../../icons/list.svg";
import { NavLink } from "react-router-dom";
import CartShopping from "../../icons/cart-shopping-solid.svg";
import RotateRightSpin from "../../icons/rotate-right-solid.svg";
import PaymentModalSuccess from "./PaymentModal/PaymentModalSuccess.tsx";
import { increment } from "firebase/firestore";
import PaymentModalCanceled from "./PaymentModal/PaymentModalCanceled.tsx";

const FortuneWheel = () => {
  const [winningSegment, setWinningSegment] = useState(null);
  const { state } = useAppState();
  const [action, setAction] = useState<AnimationAction>();
  const [wheelRotation, setWheelRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef();
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setPopupType("success");
    }

    if (query.get("canceled")) {
      setPopupType("canceled");
    }
  }, []);

  const handleActionReady = useCallback((action: AnimationAction) => {
    setAction(action);
  }, []);

  const { rotation } = useSpring({
    rotation: [0, wheelRotation, 0],
    config: {
      mass: 1,
      friction: 112,
      tension: 80,
      precision: 0.06,
    },
    immediate: wheelRotation === 0,
    onRest: (rotation) => {
      const isAnimationEnded = rotation.value.rotation.every(
        (element) => element === 0,
      );

      if (isAnimationEnded) return;

      setWheelRotation(0);
      setIsSpinning(false);
      const userID = String(state.user.id);
      const numberWiningSegment = Number(winningSegment.value);
      const isPointWinningSegment = !isNaN(numberWiningSegment);

      if (isPointWinningSegment) {
        userApi.updateUser(userID, {
          points: increment(numberWiningSegment),
        });
      }

      if (winningSegment.value === "silver_ticket") {
        fortuneWheelApi.addSilverTicket(userID);
      }

      if (winningSegment.value === "gold_ticket") {
        fortuneWheelApi.addGoldTicket(userID);
      }

      if (winningSegment.value === "bear") {
        fortuneWheelApi.addBear(userID);
      }
    },
  });

  const spinWheelHandler = async () => {
    if (isSpinning) return;

    const userID = String(state.user.id);
    await userApi.updateUser(userID, {
      spins: increment(-1),
    });
    action.paused = false;
    setIsSpinning(true);
    setTimeout(() => {
      spinWheel();
    }, 850);

    setTimeout(() => {
      action.stop();
      action.play();
      action.paused = true;
    }, 2000);
  };

  const spinWheel = () => {
    const result = chooseSegment();

    if (result) {
      setWinningSegment(result);
      const segmentIndex = SEGMENTS.findIndex(
        (seg) => seg.name === result.name,
      );
      const segmentAngle = 360 / SEGMENTS.length;
      const targetAngle = segmentIndex * segmentAngle;

      const fullRotation = 360 * 10;
      const finalRotation = -fullRotation + targetAngle;

      setWheelRotation(finalRotation * (Math.PI / 180));
    }
  };

  if (!state.user) return;

  return (
    <>
      <div className={styles["tickets"]}>
        <div>
          <img src={SilverTicket} width={35} alt={""} />
          <span>{state.user.silverTicket || 0}</span>
        </div>
        <div>
          <img src={GoldTicket} width={35} alt={""} />
          <span>{state.user.goldTicket || 0}</span>
        </div>
      </div>
      <NavLink to={"/fortune-wheel-rules"}>
        <button className={styles["rules-button"]}>
          <img src={ListIcon} alt={""} width={17} />
          <span>Rules</span>
        </button>
      </NavLink>
      {popupType === "success" && (
        <PaymentModalSuccess setPopupType={setPopupType} />
      )}

      {popupType === "canceled" && (
        <PaymentModalCanceled setPopupType={setPopupType} />
      )}

      <div className={styles["fortune-wheel"]}>
        <Canvas shadows dpr={[1, 2]}>
          {/*<Perf matrixUpdate deepAnalyze={true} position="top-left" />*/}
          <CameraHelper />
          <FortuneScene
            wheelRef={wheelRef}
            animatedRotation={rotation}
            handleActionReady={handleActionReady}
          />
        </Canvas>

        {state.user.spins > 0 ? (
          <button
            onClick={spinWheelHandler}
            type={"submit"}
            className={`${styles["spin-button"]} ${isSpinning ? styles["disabled-button"] : ""}`}
          >
            <img src={RotateRightSpin} alt={""} width={15} />
            <span>SPIN</span>
            <span>{state.user.spins}</span>
          </button>
        ) : (
          <NavLink to={"/buy-spins"}>
            <button
              className={`${styles["buy-spins-button"]} ${isSpinning ? styles["disabled-button"] : ""}`}
            >
              <img src={CartShopping} alt={""} width={15} />
              <span>Buy spins</span>
            </button>
          </NavLink>
        )}
      </div>
      {!isSpinning && winningSegment && (
        <div className={styles["winning-popup"]}>
          <div className={styles["winning-popup-content"]}>
            <p>Поздравляем!</p>
            <p>Вы выиграли {winningSegment.name}</p>
            <button
              className={styles["get-reward"]}
              onClick={() => setWinningSegment(null)}
            >
              Получить
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FortuneWheel;
