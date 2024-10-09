import {
  useHelper,
  PerspectiveCamera,
  SpotLight,
  PointLight,
} from "@react-three/drei";
import * as THREE from "three";
import React, { forwardRef, useMemo, useRef } from "react";

const LightsWheel = ({ children }) => {
  // const lightRef1 = useRef<THREE.AmbientLight>();
  const lightRef1 = useRef<THREE.DirectionalLight>();
  const lightRef2 = useRef<THREE.DirectionalLight>();
  const lightRef3 = useRef<THREE.SpotLight>();
  const lightRef4 = useRef<THREE.SpotLight>();

  // useHelper(lightRef1, THREE.DirectionalLightHelper);
  useHelper(lightRef1, THREE.DirectionalLightHelper);
  useHelper(lightRef2, THREE.DirectionalLightHelper);
  useHelper(lightRef3, THREE.SpotLightHelper);
  useHelper(lightRef4, THREE.SpotLightHelper);

  const spotlight = useMemo(() => new THREE.SpotLight("#fff"), []);

  return (
    <>
      {/*<group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 1]}>*/}
      {/*  <spotLight*/}
      {/*    intensity={15}*/}
      {/*    position={[0, -3, 4]}*/}
      {/*    shadow-bias={-0.00005}*/}
      {/*    angle={Math.PI / 5}*/}
      {/*    shadow-mapSize-width={2048}*/}
      {/*    shadow-mapSize-height={2048}*/}
      {/*    castShadow*/}
      {/*    ref={lightRef4}*/}
      {/*  />*/}
      {/*</group>*/}
      <ambientLight intensity={0.015} />
      <mesh position={[0, 1.4, -2]} rotation={[0, 0, 0]}>
        <SpotLight
          position={[0, 3.3, 0.6]}
          penumbra={1}
          distance={20}
          angle={0.5}
          attenuation={2}
          anglePower={3}
          intensity={22}
        />
      </mesh>
      <mesh position={[0, -3, 0]}>
        {/*<SpotLight*/}
        {/*  position={[0, 3, 2]}*/}
        {/*  penumbra={1}*/}
        {/*  distance={4}*/}
        {/*  angle={0.55}*/}
        {/*  attenuation={4}*/}
        {/*  anglePower={7}*/}
        {/*  intensity={2}*/}
        {/*/>*/}
      </mesh>
      {/*<ambientLight intensity={1} />*/}
      {/*<directionalLight*/}
      {/*  position={[-2, 24, -7]}*/}
      {/*  intensity={3}*/}
      {/*  castShadow*/}
      {/*  shadow-mapSize-height={1024}*/}
      {/*  shadow-mapSize-width={1024}*/}
      {/*  shadow-camera-far={70}*/}
      {/*  shadow-camera-left={-20}*/}
      {/*  ref={lightRef2}*/}
      {/*/>*/}
      {/*<directionalLight*/}
      {/*  position={[0, 2, 7]}*/}
      {/*  intensity={1}*/}
      {/*  // castShadow*/}
      {/*  shadow-mapSize-height={1024}*/}
      {/*  shadow-mapSize-width={1024}*/}
      {/*  shadow-camera-far={50}*/}
      {/*  shadow-camera-left={-10}*/}
      {/*  ref={lightRef1}*/}
      {/*/>*/}
      <pointLight
        position={[-0.7, 0.7, 1]}
        intensity={5}
        castShadow
        shadow-normalBias={0.06}
      />

      {/*<pointLight position={[-1, 1, 0]} intensity={0.5} />*/}
      {children}
    </>
  );
};

export default LightsWheel;
