import { useGLTF } from "@react-three/drei";

const Stand4 = (props) => {
  const { nodes, materials } = useGLTF("/stand_model4/untitled.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand_HP.geometry}
        material={materials["Material.004"]}
        position={[0, -3, -1]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.55, 2.35, 2.35]}
      />
    </group>
  );
};

export default Stand4;

useGLTF.preload("/stand_model4/untitled.glb");
