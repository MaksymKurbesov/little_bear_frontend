import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const StandIntelion = (props) => {
  const { nodes, materials } = useGLTF("/stand_intelion/stand.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, -1.5, 0.018]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      >
        <group position={[0, -14.365, -17.135]} scale={[1.37, 1, 1.149]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials["Mat.13"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials["Mat.12"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials["Mat.13"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials["Mat.11"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2.geometry}
          material={materials["Mat.9"]}
          position={[0, -4.841, 8.706]}
          scale={[0.973, 0.69, 1.149]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2_2.geometry}
          material={materials["Mat.12"]}
          position={[0, 19.206, 8.428]}
          scale={[2.24, 3, 3]}
        />
      </group>
    </group>
  );
};

export default StandIntelion;

useGLTF.preload("/stand_intelion/stand.glb");
