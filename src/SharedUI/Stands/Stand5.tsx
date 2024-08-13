import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Stand5 = (props) => {
  const { nodes, materials } = useGLTF("/stand_model5/untitled.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StandPink.geometry}
        material={materials["Mat.1"]}
        position={[0, -3.265, -0.8]}
        scale={1.4}
      />
    </group>
  );
};

export default Stand5;

useGLTF.preload("/stand_model5/untitled.gltf");
