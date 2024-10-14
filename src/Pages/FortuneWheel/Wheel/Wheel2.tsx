import { GradientTexture, useGLTF } from "@react-three/drei";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

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
  const { nodes, materials } = useGLTF("/wheel/untitled.gltf");
  const {
    numSegments,
    rotationSpeed,
    // totalRotation,
    // setTotalRotation,
    setRotationSpeed,
    setWinningSegment,
  } = props;

  const wheelRef = useRef();
  const wheelLightsRef = useRef();
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
    if (wheelRef.current && wheelLightsRef.current) {
      if (rotationSpeed > 0) {
        setIsRunning(true);
        wheelRef.current.rotation.y -= rotationSpeed * 0.01;
        wheelLightsRef.current.rotation.y += rotationSpeed * 0.01;
        setRotationSpeed((speed) => Math.max(speed - delta, 0));
      } else if (rotationSpeed <= 0 && isRunning) {
        setIsRunning(false);
        const finalSegment = getWinningSegment(wheelRef.current.rotation.y);
        console.log(finalSegment, "finalSegment");
        setWinningSegment(finalSegment);
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.203, 0.256, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arrow.geometry}
          material={materials["Mat.2"]}
          position={[-20.221, 0.766, -91.89]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Money_bags.geometry}
          material={materials.MoneyBag}
          position={[-22.637, 40.763, 151.991]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spheres_Spin.geometry}
          // material={materials["Mat.2"]}
          position={[16.641, -16.993, -129.931]}
        >
          <meshStandardMaterial emissive="orange" emissiveIntensity={2} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoika.geometry}
          material={materials["Mat.5"]}
          position={[-1.764, -10.426, -58.778]}
        />

        {/*S S S S S S S*/}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoika005.geometry}
          // material={materials["Mat.1"]}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.7, 1]} // As many stops as you want
              colors={["#000000", "#b02a2a", "#a42222"]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
        {/*P P P P P*/}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoika003.geometry}
          // material={materials["Mat.1"]}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.6, 1]} // As many stops as you want
              colors={["#000000", "#bd3737", "#a42222"]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
        {/*I I I I I I I I I I*/}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoika001.geometry}
          material={nodes.Stoika005.material}
          // material={new THREE.MeshStandardMaterial()}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.6, 1]} // As many stops as you want
              colors={["#000000", "#7c2323", "#a42222"]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
        {/*N N N N N */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoika002.geometry}
          // material={nodes.Stoika005.material}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.1, 0.5, 0.55]} // As many stops as you want
              colors={["#000000", "#4b0707", "#7c2323", "#a42222"]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
        {/*ARROW*/}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoika004.geometry}
          // material={nodes.Stoika005.material}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshLambertMaterial>
            <GradientTexture
              stops={[0, 0.8, 1]} // As many stops as you want
              colors={["#000000", "#942929", "#e53636"]} // Colors need to match the number of stops
              size={2048} // Size is optional, default = 1024
            />
          </meshLambertMaterial>
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoika006.geometry}
          material={materials["Mat.5"]}
          position={[-1.764, -10.426, -58.778]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoika007.geometry}
          material={materials["center circle"]}
          position={[-1.764, -10.426, -58.778]}
        />
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spheres_Wheel.geometry}
            material={materials["Mat.2"]}
            position={[-20.31, -5.647, 8.053]}
            ref={wheelLightsRef}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel.geometry}
            material={materials.Mat}
            position={[-20.31, -13.526, 8.053]}
            // ref={wheelRef}
          />
        </group>
        <mesh
          ref={wheelRef}
          castShadow
          receiveShadow
          geometry={nodes.Wheel001.geometry}
          material={materials["Mat.7"]}
          position={[-20.31, -13.526, 8.053]}
          rotation={[0, 0, 0]}
        />
      </group>
    </group>
  );
});

export default Wheel;

useGLTF.preload("/wheel/untitled.gltf");
