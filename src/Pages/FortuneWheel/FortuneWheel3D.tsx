import { useFrame, useLoader, useThree } from "@react-three/fiber";
import LightsWheel from "../../SharedUI/Lights/LightsWheel.tsx";
import Wheel from "./Wheel/Wheel.tsx";
import { DoubleSide, Mesh } from "three";
import {
  OrbitControls,
  SpotLight,
  useAspect,
  useHelper,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { LinearMipMapLinearFilter, NearestFilter, TextureLoader } from "three";
import FloorTexture from "../../images/floor-texture.webp";
import ParkLiftImage from "../../images/park-lift.png";
import { useSpring } from "react-spring";
import BearMafia from "../../Bears3D/MafiaBear.tsx";
import { Stats } from "@react-three/drei";
import Wheel2 from "./Wheel/Wheel2.tsx";
import { KernelSize, Resolution } from "postprocessing";
import * as THREE from "three";

const FortuneWheel3D = ({
  setWinningSegment,
  rotationSpeed,
  setRotationSpeed,
  handleActionReady,
}) => {
  const numSegments = 10;
  const wheelRef = useRef();
  // const cameraRef = useRef();
  const { camera } = useThree();

  const colorMap = useLoader(TextureLoader, FloorTexture);
  const parkLiftColorMap = useLoader(TextureLoader, ParkLiftImage);

  colorMap.magFilter = NearestFilter;
  colorMap.minFilter = LinearMipMapLinearFilter;

  parkLiftColorMap.magFilter = NearestFilter;
  parkLiftColorMap.minFilter = LinearMipMapLinearFilter;

  const lightRef1 = useRef<THREE.DirectionalLight>();
  useHelper(lightRef1, THREE.DirectionalLightHelper);
  // useHelper(cameraRef, THREE.CameraHelper);

  const { z } = useSpring({
    z: 2.35, // Конечное положение z
    from: { z: 10 }, // Начальное положение z
    config: { duration: 1500, easing: (t) => 1 - Math.pow(1 - t, 3) }, // Длительность анимации в миллисекундах
  });

  // useFrame(() => {
  //   if (cameraRef.current) {
  //     console.log("working");
  //     camera.position.z = z.get(); // Применяем анимированное значение z
  //   }
  // });

  const scale = useAspect(
    1080, // Pixel-width
    1534, // Pixel-height
    2, // Optional scaling factor
  );

  return (
    <>
      <ambientLight intensity={0.25} />
      <SpotLight
        position={[0, 7, 2.5]}
        penumbra={1}
        distance={25}
        angle={0.25}
        attenuation={1}
        anglePower={5}
        intensity={105}
        shadow-normalBias={0.06}
      />
      {/*<directionalLight*/}
      {/*  castShadow*/}
      {/*  shadow-normalBias={0.05}*/}
      {/*  shadow-mapSize={1024}*/}
      {/*  intensity={2.3}*/}
      {/*  position={[-3, 25, 10]}*/}
      {/*  ref={lightRef1}*/}
      {/*/>*/}
      {/*<Stats />*/}
      <color attach="background" args={["#0a0a0a"]} />
      <fog attach="fog" args={["#0a0a0a", 3, 9]} />
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.3, 0]}
      >
        <planeGeometry args={[15, 15, 64, 64]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <BearMafia handleActionReady={handleActionReady} />
      <mesh rotation={[0, 0, 0]} position={[1, 2, -5.5]} scale={scale}>
        <planeGeometry />
        <meshStandardMaterial map={parkLiftColorMap} />
      </mesh>

      <Wheel2
        ref={wheelRef}
        numSegments={numSegments}
        rotationSpeed={rotationSpeed}
        setRotationSpeed={setRotationSpeed}
        setWinningSegment={setWinningSegment}
      />
      <Suspense fallback={null}>
        <EffectComposer disableNormalPass multisampling={0}>
          <Bloom
            intensity={1.5} // The bloom intensity.
            blurPass={undefined} // A blur pass.
            // kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0.3} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.5} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur
            levels={1.5}
            // resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            // resolutionY={Resolution.AUTO_SIZE}
          />
        </EffectComposer>
      </Suspense>
    </>
  );
};

export default FortuneWheel3D;
