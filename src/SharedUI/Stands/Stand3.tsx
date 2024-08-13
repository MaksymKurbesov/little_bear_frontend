import { useGLTF } from "@react-three/drei";

const Stand3 = (props) => {
  const { nodes, materials } = useGLTF("/stand_model3/untitled.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Disc.geometry}
        material={materials.Mat}
        position={[0, -3, -0.5]}
        rotation={[Math.PI / 2.35, 0, Math.PI / 1.5]}
        scale={1.15}
      />
    </group>
  );
};

export default Stand3;

useGLTF.preload("/stand_model3/untitled.glb");
