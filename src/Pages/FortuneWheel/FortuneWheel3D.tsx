import { Canvas, useLoader } from "@react-three/fiber";
import LightsWheel from "../../SharedUI/Lights/LightsWheel.tsx";
import Wheel from "./Wheel/Wheel.tsx";
import { OrbitControls, SpotLight, useAspect } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { LinearMipMapLinearFilter, NearestFilter, TextureLoader } from "three";
import FloorTexture from "../../images/floor-texture.webp";
import ParkLiftImage from "../../images/park-lift.png";

const FortuneWheel3D = ({
  setWinningSegment,
  rotationSpeed,
  setRotationSpeed,
}) => {
  const numSegments = 10;
  const controlsRef = useRef();
  const wheelRef = useRef();

  const colorMap = useLoader(TextureLoader, FloorTexture);
  const parkLiftColorMap = useLoader(TextureLoader, ParkLiftImage);

  colorMap.magFilter = NearestFilter;
  colorMap.minFilter = LinearMipMapLinearFilter;

  parkLiftColorMap.magFilter = NearestFilter;
  parkLiftColorMap.minFilter = LinearMipMapLinearFilter;

  const scale = useAspect(
    1080, // Pixel-width
    1534, // Pixel-height
    1, // Optional scaling factor
  );

  return (
    <>
      <LightsWheel>
        <color attach="background" args={["#0a0a0a"]} />
        <fog attach="fog" args={["#0a0a0a", 1, 7]} />

        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.3, 0]}
        >
          <planeGeometry args={[15, 15, 64, 64]} />
          {/*<meshStandardMaterial map={colorMap} />*/}
          <meshPhongMaterial />
        </mesh>

        <mesh rotation={[0, 0, 0]} position={[1.3, 0.9, -2.2]} scale={scale}>
          <planeGeometry />
          <meshStandardMaterial map={parkLiftColorMap} />
        </mesh>

        {/*<mesh position={[0, 0, 0]}>*/}
        {/*  <boxGeometry args={[1, 2, 1]} />*/}
        {/*  <meshStandardMaterial*/}
        {/*    emissive="red"*/}
        {/*    emissiveIntensity={2}*/}
        {/*    toneMapped={false}*/}
        {/*  />*/}
        {/*</mesh>*/}

        <Wheel
          ref={wheelRef}
          numSegments={numSegments}
          rotationSpeed={rotationSpeed}
          setRotationSpeed={setRotationSpeed}
          setWinningSegment={setWinningSegment}
        />
        <OrbitControls ref={controlsRef} />
      </LightsWheel>
      <Suspense fallback={null}>
        <EffectComposer smaa enableNormalPass>
          <Bloom />
          {/*<SSAO />*/}
        </EffectComposer>
      </Suspense>
    </>
  );
};

export default FortuneWheel3D;
