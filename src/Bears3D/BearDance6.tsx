import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const BearDance6 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/new_bear_model/6/bear_cans.glb",
  );

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      console.log(Object.values(actions), "actions");
      props.handleActionReady(Object.values(actions));
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Null"
          position={[-0.2, -1.6, -2.5]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.22}
        >
          <mesh
            name="Mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials["Mat.001"]}
            position={[2.92, -0.15, 2.046]}
            rotation={[-1.404, -0.58, 1.716]}
            scale={0.2}
          />
          <mesh
            name="Mesh_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials["Mat.001"]}
            position={[-4.852, -5.583, 5.158]}
            rotation={[-0.726, 0.594, 0.048]}
            scale={0.2}
          />
          <mesh
            name="Mesh_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_4.geometry}
            material={materials["Mat.001"]}
            position={[1.081, -3.867, 3.095]}
            scale={0.2}
          />
          <group name="Null_2" position={[0.851, 9.421, -10.299]}>
            <skinnedMesh
              name="Bearbrick_Chest"
              geometry={nodes.Bearbrick_Chest.geometry}
              material={materials.Mat}
              skeleton={nodes.Bearbrick_Chest.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Bearbrick_Head"
              geometry={nodes.Bearbrick_Head.geometry}
              material={materials.Mat}
              skeleton={nodes.Bearbrick_Head.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Hand"
              geometry={nodes.Hand.geometry}
              material={materials.Mat}
              skeleton={nodes.Hand.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Hand_1"
              geometry={nodes.Hand_1.geometry}
              material={materials.Mat}
              skeleton={nodes.Hand_1.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Leg"
              geometry={nodes.Leg.geometry}
              material={materials.Mat}
              skeleton={nodes.Leg.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Object002"
              geometry={nodes.Object002.geometry}
              material={materials.Mat}
              skeleton={nodes.Object002.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Pelvis"
              geometry={nodes.Pelvis.geometry}
              material={materials.Mat}
              skeleton={nodes.Pelvis.skeleton}
              castShadow
            />
            <primitive object={nodes.mixamorig_Hips} />
          </group>
        </group>
      </group>
    </group>
  );
};

export default BearDance6;

useGLTF.preload("/new_bear_model/6/bear_cans.glb");
