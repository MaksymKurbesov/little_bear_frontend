import styles from "./FortuneWheel.module.css";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
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
import PaymentModal from "./PaymentModal/PaymentModal.tsx";
import { increment } from "firebase/firestore";

const FortuneWheel = () => {
  const [winningSegment, setWinningSegment] = useState(null);
  const { state } = useAppState();
  const [action, setAction] = useState<AnimationAction>();
  const [wheelRotation, setWheelRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef();
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage(
        "Поздравляем! Вы успешно приобрели 1 спин для Колеса Фортуны. Удачи в розыгрыше! 🎉",
      );
    }

    if (query.get("canceled")) {
      setMessage(
        "Покупка спина для Колеса Фортуны была успешно отменена. Если у вас есть вопросы, пожалуйста, свяжитесь с нашей поддержкой.",
      );
    }
  }, []);

  const handleActionReady = useCallback((action: AnimationAction) => {
    setAction(action);
  }, []);

  const { rotation } = useSpring({
    rotation: [0, -wheelRotation, 0],
    config: {
      mass: 2,
      friction: 182,
      tension: 80,
      precision: 0.06,
    },
    onRest: () => {
      // wheelRef.current.rotation.y = 0;
      setIsSpinning(false);

      if (winningSegment.value === "silver_ticket") {
        fortuneWheelApi.addSilverTicket(String(state.user.id));
      }

      if (winningSegment.value === "gold_ticket") {
        fortuneWheelApi.addGoldTicket(String(state.user.id));
      }
    },
  });

  const spinWheelHandler = async () => {
    // resetWheelRotation();
    const userID = String(state.user.id);
    await userApi.updateUser(userID, {
      spins: increment(-1),
    });
    action.paused = false;
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
      setIsSpinning(true);
      setWinningSegment(result);
      const segmentIndex = SEGMENTS.findIndex(
        (seg) => seg.name === result.name,
      );
      const segmentAngle = 360 / SEGMENTS.length;
      const targetAngle = segmentIndex * segmentAngle;

      const fullRotation = 360 * 10;
      const finalRotation = fullRotation + targetAngle;

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
      {message && <PaymentModal setMessage={setMessage} message={message} />}
      <div className={styles["fortune-wheel"]}>
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas shadows dpr={[1, 2]}>
            {/*<Perf matrixUpdate deepAnalyze={true} position="top-left" />*/}
            <CameraHelper />
            <FortuneScene
              wheelRef={wheelRef}
              animatedRotation={rotation}
              handleActionReady={handleActionReady}
            />
          </Canvas>
        </Suspense>
        {state.user.spins ? (
          <button
            onClick={spinWheelHandler}
            type={"submit"}
            className={styles["spin-button"]}
          >
            <img src={RotateRightSpin} alt={""} width={15} />
            <span>SPIN</span>
          </button>
        ) : (
          <form
            action="http://localhost:8000/create-checkout-session"
            method="POST"
          >
            <input
              type={"text"}
              hidden
              value={state.user.id}
              id={"userID"}
              name={"userID"}
            />
            <button
              // onClick={() => createCheckoutSession()}
              className={styles["buy-spins-button"]}
              type={"submit"}
            >
              <img src={CartShopping} alt={""} width={15} />
              <span>Buy spins</span>
            </button>
          </form>
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
