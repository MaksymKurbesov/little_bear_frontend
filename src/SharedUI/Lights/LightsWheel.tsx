import {
  useHelper,
  PerspectiveCamera,
  SpotLight,
  PointLight,
} from "@react-three/drei";
import * as THREE from "three";
import React, { forwardRef, useMemo, useRef } from "react";

const LightsWheel = ({ children }) => {
  const lightRef1 = useRef<THREE.DirectionalLight>();
  const lightRef2 = useRef<THREE.DirectionalLight>();
  const lightRef3 = useRef<THREE.SpotLight>();
  const lightRef4 = useRef<THREE.PointLight>();
  const lightRef5 = useRef<THREE.PointLight>();

  // useHelper(lightRef1, THREE.DirectionalLightHelper);
  useHelper(lightRef1, THREE.DirectionalLightHelper);
  useHelper(lightRef2, THREE.DirectionalLightHelper);
  useHelper(lightRef3, THREE.SpotLightHelper);
  useHelper(lightRef4, THREE.PointLightHelper);
  useHelper(lightRef5, THREE.PointLightHelper);

  const spotlight = useMemo(() => new THREE.SpotLight("#fff"), []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh position={[0, 2, 0]}>
        <SpotLight
          // castShadow
          position={[0, 1.5, 1]}
          penumbra={1}
          distance={15}
          angle={0.33}
          attenuation={0}
          anglePower={3}
          intensity={32}
          shadow-normalBias={0.06}
        />
      </mesh>
      <pointLight
        position={[0, 2.6, -1]}
        intensity={15}
        castShadow
        shadow-normalBias={0.06}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        ref={lightRef4}
      />

      {/*<pointLight*/}
      {/*  position={[1, 2.6, -0.4]}*/}
      {/*  intensity={15}*/}
      {/*  // castShadow*/}
      {/*  shadow-normalBias={0.06}*/}
      {/*  ref={lightRef5}*/}
      {/*/>*/}

      {children}
    </>
  );
};

export default LightsWheel;
