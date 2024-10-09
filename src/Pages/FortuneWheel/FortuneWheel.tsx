import styles from "./FortuneWheel.module.css";
import { useRef, useState } from "react";
import SilverTicket from "/silver-ticket.webp";
import GoldTicket from "/gold-ticket.webp";
import FortuneWheel3D from "./FortuneWheel3D.tsx";
import { Canvas } from "@react-three/fiber";

const FortuneWheel = () => {
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [winningSegment, setWinningSegment] = useState(null);

  const wheelRef = useRef();

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
          <img src={SilverTicket} width={35} />
          <span>0</span>
        </div>
        <div>
          <img src={GoldTicket} width={35} />
          <span>0</span>
        </div>
      </div>
      <div className={styles["fortune-wheel"]}>
        <Canvas
          shadows
          dpr={[1, 2]}
          onCreated={(state) => console.log(state.camera)}
          camera={{ position: [0, -0.2, 2] }}
        >
          <FortuneWheel3D
            setWinningSegment={setWinningSegment}
            rotationSpeed={rotationSpeed}
            setRotationSpeed={setRotationSpeed}
          />
        </Canvas>
        <button
          onClick={() => {
            resetWheelRotation();
            spinWheel();
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
