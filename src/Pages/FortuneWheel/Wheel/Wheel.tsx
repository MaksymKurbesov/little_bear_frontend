import { useGLTF } from "@react-three/drei";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "react-spring";

const segments = [
  "30000 BEAR TOKEN",
  "Серебрянный билет",
  "20000 BEAR TOKEN",
  "Золотой билет",
  "10000  BEAR TOKEN",
  "Скин 'Mafia Little Bear'",
  "50000  BEAR TOKEN",
  "Золотой билет",
  "40000  BEAR TOKEN",
  "Серебрянный билет",
];

const Wheel = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/wheel2.glb");
  const {
    numSegments,
    rotationSpeed,
    // totalRotation,
    // setTotalRotation,
    setRotationSpeed,
    setWinningSegment,
  } = props;

  const wheelRef = useRef();
  const [isRunning, setIsRunning] = useState(false);

  // const segmentAngle = (Math.PI * 2) / numSegments;
  const segmentAngle = 360 / numSegments;

  useImperativeHandle(ref, () => ({
    current: wheelRef.current,
    resetRotation: () => {
      if (wheelRef.current) {
        wheelRef.current.rotation.y = 0;
      }
    },
  }));

  function getWinningSegment(rotationAngle) {
    const rotationAngleInDegrees = rotationAngle * (180 / Math.PI);
    const initialOffset = 0; // смещение угла в градусах
    const adjustedAngle = (rotationAngleInDegrees + initialOffset) % 360;

    const normalizedAngle = (adjustedAngle + 360) % 360;
    const segmentIndex = Math.floor(normalizedAngle / segmentAngle);

    return segments[segmentIndex];
  }

  useFrame((state, delta) => {
    if (wheelRef.current) {
      if (rotationSpeed > 0) {
        setIsRunning(true);
        wheelRef.current.rotation.y -= rotationSpeed * 0.01;
        setRotationSpeed((speed) => Math.max(speed - delta, 0));
      } else if (rotationSpeed <= 0 && isRunning) {
        setIsRunning(false);
        const finalSegment = getWinningSegment(wheelRef.current.rotation.y);
        setWinningSegment(finalSegment);
      }
    }
  });

  return (
    <group
      {...props}
      // dispose={null}
      position={[-0.4, 0, -1.5]}
      rotation={[0, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oil_Tank_1.geometry}
        material={materials["Mat.5"]}
        position={[0, 0.19, 0.164]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_4.geometry}
        material={materials.MoneyBag}
        position={[-0.023, -1.264, 0.675]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group
        position={[0.185, 0.123, 0.153]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh015.geometry}
          material={materials["Mat.2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh015_1.geometry}
          material={materials["Mat.1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh015_2.geometry}
          material={materials.Mat}
        />
      </group>
      <group
        position={[0, 0.175, 0.126]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
        ref={wheelRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016.geometry}
          material={materials["Mat.7"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_1.geometry}
          material={materials["Mat.2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_2.geometry}
          material={materials.Mat}
        />
      </group>
    </group>
  );
});

export default Wheel;

useGLTF.preload("/wheel2.glb");
