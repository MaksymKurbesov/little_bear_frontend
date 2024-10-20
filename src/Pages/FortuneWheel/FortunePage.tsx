import styles from "./FortuneWheel.module.css";
import { useCallback, useState } from "react";
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
import { fortuneWheelApi } from "../../main.tsx";

const FortuneWheel = () => {
  const [winningSegment, setWinningSegment] = useState(null);
  const { state } = useAppState();
  const [action, setAction] = useState<AnimationAction>();
  const [wheelRotation, setWheelRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleActionReady = useCallback((action: AnimationAction) => {
    setAction(action);
  }, []);

  const { rotation } = useSpring({
    rotation: [0, wheelRotation, 0],
    config: {
      // duration: 5000,
      mass: 1,
      friction: 112,
      tension: 80,
      precision: 0.06,
    },
    onRest: () => {
      setIsSpinning(false);

      if (winningSegment.value === "silver_ticket") {
        fortuneWheelApi.addSilverTicket(String(state.user.id));
        console.log(state.user, "state.user");
      }

      if (winningSegment.value === "gold_ticket") {
        fortuneWheelApi.addGoldTicket(String(state.user.id));
        console.log(state.user, "state.user");
      }
    },
  });

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
      <div className={styles["fortune-wheel"]}>
        <Canvas shadows dpr={[1, 2]}>
          {/*<Perf matrixUpdate deepAnalyze={true} position="top-left" />*/}
          <CameraHelper />
          <FortuneScene
            animatedRotation={rotation}
            handleActionReady={handleActionReady}
          />
        </Canvas>
        <button
          onClick={() => {
            // resetWheelRotation();
            action.paused = false;
            setTimeout(() => {
              spinWheel();
            }, 850);

            setTimeout(() => {
              action.stop();
              action.play();
              action.paused = true;
            }, 2000);
          }}
          className={styles["spin-button"]}
        >
          SPIN
        </button>
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
