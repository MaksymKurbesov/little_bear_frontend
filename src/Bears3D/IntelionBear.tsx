import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const BearIntelion = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/new_bear_model/intelion/bear2.glb",
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
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={25} position={[0, -3.3, 0]}>
        <mesh
          name="Extrude_5"
          castShadow
          receiveShadow
          geometry={nodes.Extrude_5.geometry}
          material={materials.white}
          position={[-0.003, 0.138, 0.058]}
          scale={0}
        />
        <mesh
          name="WiFi"
          castShadow
          receiveShadow
          geometry={nodes.WiFi.geometry}
          material={materials.white}
          position={[0, 0.125, 0.061]}
          scale={0}
        />
        <mesh
          name="Bl"
          castShadow
          receiveShadow
          geometry={nodes.Bl.geometry}
          material={materials.white}
          position={[0.007, 0.129, 0.056]}
          scale={0}
        />
        <group
          name="Intelion"
          position={[0, 0.11, 0.003]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <skinnedMesh
            name="Bearbrick_Chest"
            geometry={nodes.Bearbrick_Chest.geometry}
            material={materials["Mat.5"]}
            skeleton={nodes.Bearbrick_Chest.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Bearbrick_Head"
            geometry={nodes.Bearbrick_Head.geometry}
            material={materials["Mat.5"]}
            skeleton={nodes.Bearbrick_Head.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Hand"
            geometry={nodes.Hand.geometry}
            material={materials["Mat.5"]}
            skeleton={nodes.Hand.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Hand_1"
            geometry={nodes.Hand_1.geometry}
            material={materials["Mat.5"]}
            skeleton={nodes.Hand_1.skeleton}
            castShadow
          />
          <group name="LegL">
            <skinnedMesh
              name="Mesh003"
              geometry={nodes.Mesh003.geometry}
              material={materials["Mat.9"]}
              skeleton={nodes.Mesh003.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Mesh003_1"
              geometry={nodes.Mesh003_1.geometry}
              material={materials.white}
              skeleton={nodes.Mesh003_1.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Mesh003_2"
              geometry={nodes.Mesh003_2.geometry}
              material={materials["Mat.5"]}
              skeleton={nodes.Mesh003_2.skeleton}
              castShadow
            />
          </group>
          <group name="LegR">
            <skinnedMesh
              name="Mesh004"
              geometry={nodes.Mesh004.geometry}
              material={materials["Mat.9"]}
              skeleton={nodes.Mesh004.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Mesh004_1"
              geometry={nodes.Mesh004_1.geometry}
              material={materials.white}
              skeleton={nodes.Mesh004_1.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Mesh004_2"
              geometry={nodes.Mesh004_2.geometry}
              material={materials["Mat.5"]}
              skeleton={nodes.Mesh004_2.skeleton}
              castShadow
            />
          </group>
          <skinnedMesh
            name="Pelvis"
            geometry={nodes.Pelvis.geometry}
            material={materials["Mat.5"]}
            skeleton={nodes.Pelvis.skeleton}
            castShadow
          />
          <primitive object={nodes.mixamorig_HipsGG2} />
        </group>
      </group>
    </group>
  );
};

export default BearIntelion;

useGLTF.preload("/new_bear_model/intelion/bear2.glb");
