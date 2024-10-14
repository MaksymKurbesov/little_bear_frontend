import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const BearMafia = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/new_bear_model/mafia/mafia_bear.glb",
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = Object.values(actions)[0];
    if (!action) return;

    action.play();
    action.paused = true;

    props.handleActionReady(action);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Null_4"
          rotation={[Math.PI / 2, 0, Math.PI / 1.9]}
          scale={0.06}
          position={[1.2, -0.62, 0]}
        >
          <skinnedMesh
            castShadow
            name="Bearbrick_Chest"
            geometry={nodes.Bearbrick_Chest.geometry}
            material={materials.Mat}
            skeleton={nodes.Bearbrick_Chest.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Bearbrick_Head"
            geometry={nodes.Bearbrick_Head.geometry}
            material={materials.Mat}
            skeleton={nodes.Bearbrick_Head.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Hand"
            geometry={nodes.Hand.geometry}
            material={materials.Mat}
            skeleton={nodes.Hand.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Hand_1"
            geometry={nodes.Hand_1.geometry}
            material={materials.Mat}
            skeleton={nodes.Hand_1.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Leg"
            geometry={nodes.Leg.geometry}
            material={materials.Mat}
            skeleton={nodes.Leg.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Object002"
            geometry={nodes.Object002.geometry}
            material={materials.Mat}
            skeleton={nodes.Object002.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Pelvis"
            geometry={nodes.Pelvis.geometry}
            material={materials.Mat}
            skeleton={nodes.Pelvis.skeleton}
          />
          <primitive object={nodes.mixamorig_Hips} />
        </group>
      </group>
    </group>
  );
};

export default BearMafia;

useGLTF.preload("/new_bear_model/mafia/mafia_bear.glb");
