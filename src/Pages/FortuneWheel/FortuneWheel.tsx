import styles from "./FortuneWheel.module.css";
import { useCallback, useRef, useState } from "react";
import SilverTicket from "/silver-ticket.webp";
import GoldTicket from "/gold-ticket.webp";
import FortuneWheel3D from "./FortuneWheel3D.tsx";
import { Canvas, useThree } from "@react-three/fiber";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import { AnimationAction } from "three";
import {
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";
import CameraHelper from "./CameraHelper.tsx";
import { Perf } from "r3f-perf";

const FortuneWheel = () => {
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [winningSegment, setWinningSegment] = useState(null);
  const { state } = useAppState();
  const [action, setAction] = useState<AnimationAction>();

  const wheelRef = useRef();

  const [dpr, setDpr] = useState(1.5);

  const handleActionReady = useCallback((action: AnimationAction) => {
    setAction(action);
  }, []);

  const resetWheelRotation = () => {
    if (wheelRef.current) {
      wheelRef.current.resetRotation();
    }
  };

  const spinWheel = () => {
    const randomSpeed = Math.random() * 5 + 5;
    setRotationSpeed(randomSpeed);
  };

  return (
    <>
      <div className={styles["tickets"]}>
        <div>
          <img src={SilverTicket} width={35} alt={""} />
          <span>{state.user.silverTickets}</span>
        </div>
        <div>
          <img src={GoldTicket} width={35} alt={""} />
          <span>{state.user.goldTickets}</span>
        </div>
      </div>
      <div className={styles["fortune-wheel"]}>
        <Canvas
          shadows
          dpr={dpr}

          // camera={{ position: [0, -0.2, 2.5], near: 0.01, far: 10000 }}
          // camera={{ position: [0, 0, 0] }}
        >
          <Perf position="top-left" />
          <CameraHelper />
          <FortuneWheel3D
            setWinningSegment={setWinningSegment}
            rotationSpeed={rotationSpeed}
            setRotationSpeed={setRotationSpeed}
            handleActionReady={handleActionReady}
          />
        </Canvas>
        <button
          onClick={() => {
            resetWheelRotation();
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
      {winningSegment && (
        <div className={styles["winning-popup"]}>
          <div className={styles["winning-popup-content"]}>
            <p>Поздравляем!</p>
            <p>Вы выиграли {winningSegment}</p>
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
