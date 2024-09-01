import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Stand5 = (props) => {
  const { nodes, materials } = useGLTF("/stand_model6/stand.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_1.geometry}
        material={materials["Mat.1"]}
        position={[0, -2.5, -0.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.55}
      />
    </group>
  );
};

export default Stand5;

useGLTF.preload("/stand_model6/stand.glb");
