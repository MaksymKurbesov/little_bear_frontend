import { SpotLight, useAspect, useHelper } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { LinearMipMapLinearFilter, NearestFilter, TextureLoader } from "three";
import FloorTexture from "../../images/floor-texture.webp";
import ParkLiftImage from "../../images/park-lift.png";
import { useRef } from "react";
import * as THREE from "three";

const FortuneEnviroment = () => {
  const colorMap = useLoader(TextureLoader, FloorTexture);
  const parkLiftColorMap = useLoader(TextureLoader, ParkLiftImage);

  colorMap.magFilter = NearestFilter;
  colorMap.minFilter = LinearMipMapLinearFilter;

  parkLiftColorMap.magFilter = NearestFilter;
  parkLiftColorMap.minFilter = LinearMipMapLinearFilter;

  const lightRef1 = useRef<THREE.DirectionalLight>();
  useHelper(lightRef1, THREE.DirectionalLightHelper);

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
        distance={15}
        angle={0.25}
        attenuation={0}
        anglePower={0}
        intensity={105}
        shadow-normalBias={0.06}
      />
      <color attach="background" args={["#0a0a0a"]} />
      <fog attach="fog" args={["#0a0a0a", 3, 9]} />
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.3, 0]}
      >
        <planeGeometry args={[5, 5, 1, 1]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      {/*<mesh rotation={[0, 0, 0]} position={[1, 2, -5.5]} scale={scale}>*/}
      {/*  <planeGeometry />*/}
      {/*  <meshStandardMaterial map={parkLiftColorMap} />*/}
      {/*</mesh>*/}
    </>
  );
};

export default FortuneEnviroment;
