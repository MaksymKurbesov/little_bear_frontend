import { GradientTexture, useGLTF } from "@react-three/drei";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import * as THREE from "three";
import { animated } from "@react-spring/three";

const Wheel = forwardRef(({ animatedRotation }, ref) => {
  const wheelRef = useRef();
  const wheelLightsRef = useRef();
  const { nodes, materials } = useGLTF("/wheel/untitled.gltf");

  const gradientTexture = useMemo(
    () => (
      <GradientTexture
        stops={[0, 0.7, 1]}
        colors={["#000000", "#b02a2a", "#a42222"]}
        size={1024}
      />
    ),
    [],
  );

  useImperativeHandle(ref, () => ({
    current: wheelRef.current,
    resetRotation: () => {
      if (wheelRef.current) {
        console.log("reset");
        wheelRef.current.rotation.y = 0;
      }
    },
  }));

  return (
    <group dispose={null}>
      <group
        position={[0, 0.256, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <animated.mesh
          ref={wheelRef}
          // onClick={spinWheel}
          castShadow
          receiveShadow
          geometry={nodes.Wheel001.geometry}
          material={materials["Mat.7"]}
          position={[-20.31, -13.526, 8.053]}
          rotation={animatedRotation}
        ></animated.mesh>
        <mesh
          castShadow
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
          geometry={nodes.Spheres_Spin.geometry}
          position={[16.641, -16.993, -129.931]}
        >
          <meshStandardMaterial emissive="orange" emissiveIntensity={2} />
        </mesh>
        <mesh
          geometry={nodes.Stoika.geometry}
          material={materials["Mat.5"]}
          position={[-1.764, -10.426, -58.778]}
        />

        {/*S S S S S S S*/}
        <mesh
          castShadow
          geometry={nodes.Stoika005.geometry}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>{gradientTexture}</meshBasicMaterial>
        </mesh>
        {/*P P P P P*/}
        <mesh
          castShadow
          geometry={nodes.Stoika003.geometry}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>{gradientTexture}</meshBasicMaterial>
        </mesh>
        {/*I I I I I I I I I I*/}
        <mesh
          castShadow
          geometry={nodes.Stoika001.geometry}
          material={nodes.Stoika005.material}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>{gradientTexture}</meshBasicMaterial>
        </mesh>
        {/*N N N N N */}
        <mesh
          castShadow
          geometry={nodes.Stoika002.geometry}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>{gradientTexture}</meshBasicMaterial>
        </mesh>
        {/*ARROW*/}
        <mesh
          castShadow
          geometry={nodes.Stoika004.geometry}
          position={[-1.764, -10.426, -58.778]}
        >
          <meshBasicMaterial>{gradientTexture}</meshBasicMaterial>
        </mesh>

        <mesh
          receiveShadow
          geometry={nodes.Stoika006.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#181818" })}
          position={[-1.764, -10.426, -58.778]}
        />
        <mesh
          geometry={nodes.Stoika007.geometry}
          material={materials["center circle"]}
          position={[-1.764, -10.426, -58.778]}
        />
        <group>
          <mesh
            geometry={nodes.Spheres_Wheel.geometry}
            material={materials["Mat.2"]}
            position={[-20.31, -5.647, 8.053]}
            ref={wheelLightsRef}
          />

          <mesh
            castShadow
            geometry={nodes.Wheel.geometry}
            material={materials.Mat}
            position={[-20.31, -13.526, 8.053]}
          />
        </group>

        {/*<mesh*/}
        {/*  ref={wheelRef}*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.Wheel001.geometry}*/}
        {/*  material={materials["Mat.7"]}*/}
        {/*  position={[-20.31, -13.526, 8.053]}*/}
        {/*  rotation={[0, 0, 0]}*/}
        {/*/>*/}
      </group>
    </group>
  );
});

export default Wheel;

useGLTF.preload("/wheel/untitled.gltf");
