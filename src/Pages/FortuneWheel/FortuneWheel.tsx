import styles from "./FortuneWheel.module.css";
import Wheel from "./Wheel/Wheel.tsx";
import { Canvas } from "@react-three/fiber";
import Lights from "../../SharedUI/Lights/Lights.tsx";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { randomIntFromInterval } from "../../utils/helpers.ts";

const FortuneWheel = () => {
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [totalRotation, setTotalRotation] = useState(0);
  const [winningSegment, setWinningSegment] = useState(null);

  const numSegments = 10;
  const wheelRef = useRef();

  const controlsRef = useRef();

  const resetWheelRotation = () => {
    if (wheelRef.current) {
      wheelRef.current.resetRotation();
      // Или напрямую:
      // wheelRef.current.current.rotation.z = 0;
    }
  };

  console.log(winningSegment, "winningSegment");

  const spinWheel = () => {
    setRotationSpeed(5);

    const randomSpeed = Math.random() * 5 + 5;
    // const randomRotations = 0.9 * 10 + 5;
    setRotationSpeed(randomSpeed);
    // setTotalRotation(randomRotations * Math.PI * 2);
  };

  return (
    <div className={styles["fortune-wheel"]}>
      <Canvas shadows camera={{ position: [0, 0, 0] }}>
        <Lights>
          <Wheel
            ref={wheelRef}
            numSegments={numSegments}
            rotationSpeed={rotationSpeed}
            setRotationSpeed={setRotationSpeed}
            // totalRotation={totalRotation}
            // setTotalRotation={setTotalRotation}
            setWinningSegment={setWinningSegment}
          />

          {/*<Wheel2 numSegments={10} />*/}
          <OrbitControls ref={controlsRef} />
        </Lights>
      </Canvas>
      <button
        onClick={() => {
          resetWheelRotation();
          spinWheel();
        }}
        className={styles["spin-button"]}
      >
        SPIN!!!
      </button>
    </div>
  );
};

export default FortuneWheel;
