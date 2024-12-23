import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Kyberon = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/new_bear_model/kyberon/kyberon.glb",
  );

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = Object.values(actions);
    if (!action) return;

    action.forEach((item) => {
      item.play();
      item.paused = true;
    });

    props.handleActionReady(action);
  }, []);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={1.1}
      position={[0, -2.5, 0]}
    >
      <group name="Scene">
        <mesh
          name="Moon_Sphere_001"
          castShadow
          receiveShadow
          geometry={nodes.Moon_Sphere_001.geometry}
          material={materials.moon}
          position={[0, -2.94, 0.123]}
          rotation={[-2.073, Math.PI / 2, 0]}
          scale={3}
        >
          <mesh
            name="sputnik"
            castShadow
            receiveShadow
            geometry={nodes.sputnik.geometry}
            material={materials.sputnik_color}
            position={[0.213, 1.049, 0.303]}
            rotation={[-0.76, 0.223, 2.913]}
            scale={0.133}
          />
        </mesh>
        <group
          name="NullR"
          position={[0, 0, 0.134]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.25}
        >
          <skinnedMesh
            name="Bearbrick_Chest"
            geometry={nodes.Bearbrick_Chest.geometry}
            material={materials["Mat.3"]}
            skeleton={nodes.Bearbrick_Chest.skeleton}
            castShadow
          />
          <skinnedMesh
            name="HandL"
            geometry={nodes.HandL.geometry}
            material={materials["Mat.3"]}
            skeleton={nodes.HandL.skeleton}
            castShadow
          />
          <skinnedMesh
            name="HandR"
            geometry={nodes.HandR.geometry}
            material={materials["Mat.3"]}
            skeleton={nodes.HandR.skeleton}
            castShadow
          />
          <skinnedMesh
            name="LegL"
            geometry={nodes.LegL.geometry}
            material={materials["Mat.3"]}
            skeleton={nodes.LegL.skeleton}
            castShadow
          />
          <skinnedMesh
            name="LegR"
            geometry={nodes.LegR.geometry}
            material={materials["Mat.3"]}
            skeleton={nodes.LegR.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Object003"
            geometry={nodes.Object003.geometry}
            material={materials["Mat.3"]}
            skeleton={nodes.Object003.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Object004"
            geometry={nodes.Object004.geometry}
            material={materials["Mat.3"]}
            skeleton={nodes.Object004.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Pelvis"
            geometry={nodes.Pelvis.geometry}
            material={materials["Mat.3"]}
            skeleton={nodes.Pelvis.skeleton}
            castShadow
          />
          <primitive object={nodes.mixamorig_Hipsr} />
        </group>
      </group>
    </group>
  );
};

export default Kyberon;

useGLTF.preload("/new_bear_model/kyberon/kyberon.glb");
