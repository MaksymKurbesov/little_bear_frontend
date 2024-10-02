import { useGLTF } from "@react-three/drei";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const segments = [
  "Приз 1",
  "Приз 2",
  "Приз 3",
  "Приз 4",
  "Приз 5",
  "Приз 6",
  "Приз 7",
  "Приз 8",
  "Приз 9",
  "Приз 10",
];

const Wheel = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/wheel.glb");
  const {
    numSegments,
    rotationSpeed,
    // totalRotation,
    // setTotalRotation,
    setRotationSpeed,
    setWinningSegment,
    test,
  } = props;

  const wheelRef = useRef();
  const [isRunning, setIsRunning] = useState(false);

  // const segmentAngle = (Math.PI * 2) / numSegments;
  const segmentAngle = 360 / numSegments;

  useImperativeHandle(ref, () => ({
    current: wheelRef.current,
    resetRotation: () => {
      if (wheelRef.current) {
        wheelRef.current.rotation.z = 0;
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

  const calculateSegment = (rotationZ) => {
    const normalizedRotation =
      ((rotationZ % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

    const segment = Math.floor(normalizedRotation / segmentAngle);

    return segment + 1;
  };

  useFrame(() => {
    if (wheelRef.current) {
      // Если колесо еще должно вращаться, продолжаем его крутить
      if (rotationSpeed > 0) {
        // Вращаем колесо по оси Z
        setIsRunning(true);
        wheelRef.current.rotation.z += rotationSpeed * 0.01;
        // setTotalRotation((rotation) =>
        //   Math.max(rotation - rotationSpeed * 0.01, 0),
        // ); // Уменьшаем общее количество оставшихся оборотов

        // Плавно уменьшаем скорость вращения
        setRotationSpeed((speed) => Math.max(speed - 0.01, 0));
        setIsRunning(true);
      } else if (rotationSpeed <= 0 && isRunning) {
        setIsRunning(false);
        // Если вращение завершено, вычисляем сегмент
        // const finalSegment = calculateSegment(wheelRef.current.rotation.z);
        const finalSegment = getWinningSegment(-wheelRef.current.rotation.z);
        setWinningSegment(finalSegment);
      }
    }
  });

  return (
    <>
      <group {...props} dispose={null}>
        <group
          position={[0.1, 0.1, -1.1]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.013}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={nodes.Cube_2.material}
            position={[0, 13.614, 2.101]}
          />
          <mesh
            ref={wheelRef}
            castShadow
            receiveShadow
            geometry={nodes.Torus_3.geometry}
            material={nodes.Torus_3.material}
            position={[0, -13.614, -2.101]}
            // rotation={[0, 0, 0.4]}
          />
        </group>
      </group>
    </>
  );
});

export default Wheel;

useGLTF.preload("/wheel.glb");
