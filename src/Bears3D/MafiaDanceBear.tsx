import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const MafiaBearDance6 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/new_bear_model/mafia_dance/mafia-bear.glb",
  );

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions, "actions");
    const action = Object.values(actions);
    if (!action) return;

    action.forEach((item) => {
      item.play();
      item.paused = true;
    });

    // console.log(action, "action");
    //
    // action.play();
    // action.paused = true;

    props.handleActionReady(action);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Null"
          position={[0.4, -0.067, -0.36]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2}
        >
          <mesh
            name="cash_pile"
            castShadow
            receiveShadow
            geometry={nodes.cash_pile.geometry}
            material={materials.Cash_Pile}
            position={[-2.733, -4.637, 12.319]}
            rotation={[Math.PI / 2, -0.644, -Math.PI]}
            scale={[40, 50, 40]}
          />
          <mesh
            name="Cash_Pile_S"
            castShadow
            receiveShadow
            geometry={nodes.Cash_Pile_S.geometry}
            material={materials["100_dollar"]}
            position={[-0.278, 2.591, -8.194]}
            rotation={[-2.705, 1.171, Math.PI]}
            scale={[20, 2, 20]}
          />
          <mesh
            name="Cash_Pile_S_1"
            castShadow
            receiveShadow
            geometry={nodes.Cash_Pile_S_1.geometry}
            material={materials["100_dollar"]}
            position={[-0.141, 2.904, -8.051]}
            rotation={[-2.705, 1.555, -Math.PI]}
            scale={[20, 71.52, 20]}
          />
          <group
            name="Cylinder_001"
            position={[-15.962, -15.608, 0.603]}
            rotation={[-Math.PI / 2, 0.611, 0]}
            scale={2}
          >
            <mesh
              name="Mesh004"
              castShadow
              receiveShadow
              geometry={nodes.Mesh004.geometry}
              material={materials.BlackPlastic}
            />
            <mesh
              name="Mesh004_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh004_1.geometry}
              material={materials.solidMetal}
            />
          </group>
          <group
            name="MoneyAnim"
            position={[0.319, -3.184, -26.913]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.4, 0.22, 0.4]}
          >
            <group
              name="Group001"
              position={[-5.297, 0.457, 3.512]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group
                name="Box001"
                position={[49.181, 2.641, -147.098]}
                rotation={[2.951, 0.049, 0.621]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh023"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh023.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh023_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh023_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh023_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh023_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh023_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh023_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh023_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh023_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh023_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh023_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box002"
                position={[49.178, 2.619, -147.088]}
                scale={0}
              >
                <mesh
                  name="Mesh021"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh021.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh021_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh021_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh021_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh021_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh021_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh021_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh021_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh021_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh021_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh021_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box003"
                position={[28.484, -35.706, -128.135]}
                rotation={[2.349, 0.187, -2.726]}
                scale={[0, 0, 0.003]}
              >
                <mesh
                  name="Mesh027"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh027.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh027_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh027_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh027_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh027_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh027_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh027_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh027_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh027_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh027_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh027_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box004"
                position={[49.178, 2.619, -147.088]}
                rotation={[-2.664, 0.296, -2.975]}
                scale={[0, 0, 0.04]}
              >
                <mesh
                  name="Mesh026"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh026.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh026_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh026_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh026_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh026_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh026_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh026_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh026_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh026_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh026_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh026_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box005"
                position={[39.417, -25.067, -134.64]}
                rotation={[-1.802, 0.522, 2.539]}
                scale={[0, 0, 0.037]}
              >
                <mesh
                  name="Mesh022"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh022.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh022_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh022_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh022_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh022_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh022_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh022_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh022_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh022_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh022_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh022_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box006"
                position={[-5.888, -43.799, -112.472]}
                rotation={[1.032, 0.163, 0.342]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh028"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh028.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh028_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh028_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh028_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh028_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh028_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh028_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh028_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh028_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh028_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh028_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box007"
                position={[47.367, -8.497, -142.4]}
                rotation={[2.386, 0.269, 0.355]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh019"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh019.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh019_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh019_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh019_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh019_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh019_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh019_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh019_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh019_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh019_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh019_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box008"
                position={[48.532, -3.099, -144.703]}
                rotation={[2.775, 0.13, 0.419]}
                scale={[0, 0, 0.045]}
              >
                <mesh
                  name="Mesh018"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh018.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh018_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh018_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh018_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh018_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh018_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh018_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh018_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh018_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh018_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh018_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box009"
                position={[49.178, 2.619, -147.088]}
                rotation={[2.949, 0.048, 0.621]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh020"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh020.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh020_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh020_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh020_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh020_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh020_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh020_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh020_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh020_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh020_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh020_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box010"
                position={[-13.275, -42.06, -109.127]}
                rotation={[1.433, -0.124, -2.952]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh030"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh030.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh030_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh030_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh030_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh030_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh030_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh030_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh030_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh030_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh030_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh030_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box011"
                position={[48.532, -3.099, -144.703]}
                scale={0}
              >
                <mesh
                  name="Mesh024"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh024.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh024_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh024_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh024_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh024_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh024_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh024_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh024_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh024_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh024_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh024_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box012"
                position={[-43.225, -11.313, -89.066]}
                rotation={[1.671, -0.237, -2.871]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh031"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh031.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh031_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh031_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh031_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh031_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh031_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh031_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh031_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh031_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh031_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh031_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box013"
                position={[-16.582, -40.855, -107.569]}
                rotation={[1.567, 0.206, 0.505]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh029"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh029.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh029_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh029_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh029_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh029_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh029_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh029_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh029_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh029_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh029_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh029_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box014"
                position={[49.181, 2.641, -147.098]}
                rotation={[2.775, 0.13, 0.419]}
                scale={[0, 0, 0.045]}
              >
                <mesh
                  name="Mesh025"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh025.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh025_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh025_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh025_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh025_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh025_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh025_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh025_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh025_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh025_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh025_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Helix001"
                position={[-0.516, 2.641, -147.098]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              name="Group002"
              position={[3.454, -0.457, 0.961]}
              rotation={[-1.591, 0.108, 1.069]}
              scale={[1, 0.998, 1.019]}
            >
              <group
                name="Box015"
                position={[41.596, 9.52, -142.512]}
                rotation={[1.5, -0.223, -0.68]}
                scale={[0, 0, 0.044]}
              >
                <mesh
                  name="Mesh032"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh032.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh032_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh032_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh032_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh032_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh032_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh032_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh032_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh032_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh032_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh032_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box016"
                position={[40.512, 3.922, -140.393]}
                rotation={[2.284, -0.341, -0.25]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh033"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh033.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh033_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh033_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh033_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh033_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh033_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh033_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh033_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh033_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh033_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh033_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box017"
                position={[42.158, 15.445, -144.704]}
                rotation={[1.294, -0.487, 0.598]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh034"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh034.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh034_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh034_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh034_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh034_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh034_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh034_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh034_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh034_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh034_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh034_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box018"
                position={[42.158, 15.445, -144.704]}
                scale={0}
              >
                <mesh
                  name="Mesh035"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh035.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh035_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh035_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh035_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh035_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh035_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh035_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh035_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh035_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh035_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh035_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box019"
                position={[32.842, -13.322, -133.208]}
                rotation={[-2.161, -0.326, -0.037]}
                scale={[0, 0, 0.039]}
              >
                <mesh
                  name="Mesh036"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh036.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh036_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh036_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh036_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh036_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh036_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh036_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh036_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh036_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh036_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh036_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box020"
                position={[42.161, 15.468, -144.712]}
                rotation={[1.282, -0.496, 0.588]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh037"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh037.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh037_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh037_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh037_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh037_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh037_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh037_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh037_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh037_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh037_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh037_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box021"
                position={[41.596, 9.52, -142.512]}
                scale={0}
              >
                <mesh
                  name="Mesh038"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh038.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh038_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh038_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh038_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh038_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh038_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh038_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh038_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh038_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh038_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh038_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box022"
                position={[42.161, 15.468, -144.712]}
                rotation={[1.5, -0.223, -0.68]}
                scale={[0, 0, 0.044]}
              >
                <mesh
                  name="Mesh039"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh039.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh039_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh039_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh039_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh039_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh039_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh039_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh039_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh039_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh039_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh039_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box023"
                position={[42.158, 15.445, -144.704]}
                rotation={[-2.975, -0.22, -2.546]}
                scale={[0, 0, 0.047]}
              >
                <mesh
                  name="Mesh040"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh040.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh040_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh040_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh040_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh040_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh040_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh040_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh040_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh040_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh040_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh040_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box024"
                position={[22.163, -24.528, -127.097]}
                rotation={[3.028, -0.303, -2.805]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh041"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh041.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh041_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh041_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh041_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh041_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh041_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh041_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh041_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh041_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh041_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh041_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box025"
                position={[-11.504, -33.985, -111.901]}
                rotation={[1.178, -0.272, 0.119]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh042"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh042.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh042_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh042_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh042_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh042_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh042_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh042_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh042_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh042_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh042_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh042_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box026"
                position={[-21.947, -31.469, -106.994]}
                rotation={[3.082, -0.434, 2.629]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh043"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh043.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh043_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh043_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh043_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh043_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh043_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh043_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh043_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh043_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh043_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh043_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box027"
                position={[-18.722, -32.538, -108.561]}
                rotation={[1.636, -0.312, 3.135]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh044"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh044.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh044_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh044_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh044_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh044_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh044_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh044_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh044_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh044_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh044_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh044_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box028"
                position={[-47.546, -3.545, -87.975]}
                rotation={[-2.577, -0.708, -0.044]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh045"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh045.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh045_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh045_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh045_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh045_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh045_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh045_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh045_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh045_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh045_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh045_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Helix002"
                position={[-7.536, 15.468, -144.712]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              name="Group003"
              position={[-1.238, 0.457, 1.777]}
              rotation={[-Math.PI / 2, 0, 0.793]}
            >
              <group
                name="Box029"
                position={[48.532, -3.099, -144.703]}
                rotation={[1.634, -0.399, -0.483]}
                scale={[0, 0, 0.045]}
              >
                <mesh
                  name="Mesh046"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh046.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh046_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh046_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh046_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh046_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh046_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh046_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh046_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh046_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh046_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh046_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box030"
                position={[49.178, 2.619, -147.088]}
                rotation={[1.385, -0.343, 0.729]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh047"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh047.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh047_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh047_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh047_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh047_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh047_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh047_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh047_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh047_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh047_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh047_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box031"
                position={[48.532, -3.099, -144.703]}
                scale={0}
              >
                <mesh
                  name="Mesh048"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh048.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh048_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh048_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh048_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh048_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh048_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh048_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh048_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh048_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh048_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh048_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box032"
                position={[-43.225, -11.313, -89.066]}
                rotation={[-2.486, -0.716, 0.113]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh049"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh049.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh049_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh049_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh049_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh049_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh049_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh049_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh049_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh049_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh049_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh049_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box033"
                position={[49.181, 2.641, -147.098]}
                rotation={[1.634, -0.399, -0.483]}
                scale={[0, 0, 0.045]}
              >
                <mesh
                  name="Mesh050"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh050.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh050_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh050_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh050_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh050_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh050_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh050_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh050_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh050_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh050_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh050_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box034"
                position={[-16.582, -40.855, -107.569]}
                rotation={[2.96, -0.402, 2.597]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh051"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh051.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh051_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh051_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh051_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh051_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh051_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh051_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh051_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh051_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh051_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh051_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box035"
                position={[47.367, -8.497, -142.4]}
                rotation={[2.236, -0.291, -0.165]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh052"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh052.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh052_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh052_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh052_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh052_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh052_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh052_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh052_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh052_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh052_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh052_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box036"
                position={[49.178, 2.619, -147.088]}
                scale={0}
              >
                <mesh
                  name="Mesh053"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh053.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh053_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh053_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh053_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh053_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh053_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh053_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh053_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh053_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh053_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh053_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box037"
                position={[-13.275, -42.06, -109.127]}
                rotation={[1.265, -0.288, 3.059]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh054"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh054.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh054_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh054_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh054_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh054_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh054_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh054_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh054_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh054_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh054_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh054_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box038"
                position={[39.417, -25.067, -134.639]}
                rotation={[2.587, 0.308, -0.226]}
                scale={[0, 0, 0.033]}
              >
                <mesh
                  name="Mesh055"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh055.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh055_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh055_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh055_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh055_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh055_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh055_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh055_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh055_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh055_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh055_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box039"
                position={[49.181, 2.641, -147.098]}
                rotation={[1.374, -0.356, 0.719]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh056"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh056.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh056_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh056_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh056_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh056_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh056_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh056_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh056_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh056_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh056_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh056_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box040"
                position={[28.484, -35.706, -128.135]}
                rotation={[-3.053, 0.146, -2.842]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh057"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh057.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh057_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh057_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh057_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh057_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh057_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh057_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh057_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh057_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh057_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh057_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box041"
                position={[-5.888, -43.799, -112.472]}
                rotation={[1.684, 0.172, 0.272]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh058"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh058.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh058_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh058_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh058_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh058_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh058_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh058_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh058_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh058_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh058_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh058_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box042"
                position={[49.178, 2.619, -147.088]}
                rotation={[3.013, -0.454, -2.737]}
                scale={[0, 0, 0.047]}
              >
                <mesh
                  name="Mesh059"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh059.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh059_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh059_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh059_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh059_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh059_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh059_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh059_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh059_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh059_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh059_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Helix003"
                position={[-0.516, 2.641, -147.098]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              name="Group004"
              position={[3.081, -0.457, -6.249]}
              rotation={[-1.823, 0.537, 1.913]}
              scale={[1, 1.179, 0.955]}
            >
              <group
                name="Box043"
                position={[42.158, -16.268, -144.42]}
                rotation={[0.714, -0.591, 0.288]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh060"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh060.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh060_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh060_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh060_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh060_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh060_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh060_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh060_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh060_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh060_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh060_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box044"
                position={[32.842, -40.504, -114.608]}
                rotation={[-2.382, -0.294, 0.11]}
                scale={[0, 0, 0.049]}
              >
                <mesh
                  name="Mesh061"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh061.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh061_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh061_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh061_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh061_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh061_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh061_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh061_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh061_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh061_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh061_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box045"
                position={[41.596, -21.297, -138.443]}
                rotation={[-2.31, -0.674, -3.029]}
                scale={[0, 0, 0.035]}
              >
                <mesh
                  name="Mesh062"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh062.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh062_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh062_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh062_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh062_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh062_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh062_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh062_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh062_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh062_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh062_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box046"
                position={[42.161, -16.248, -144.443]}
                rotation={[0.709, -0.592, 0.284]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh063"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh063.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh063_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh063_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh063_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh063_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh063_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh063_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh063_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh063_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh063_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh063_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box047"
                position={[-11.504, -55.154, -81.098]}
                rotation={[1.926, -0.475, 0.162]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh064"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh064.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh064_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh064_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh064_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh064_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh064_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh064_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh064_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh064_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh064_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh064_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box048"
                position={[-21.947, -51.785, -78.225]}
                rotation={[-2.427, -0.595, -3.076]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh065"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh065.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh065_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh065_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh065_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh065_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh065_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh065_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh065_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh065_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh065_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh065_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box049"
                position={[-18.722, -53.107, -78.966]}
                rotation={[2.495, -0.308, -2.771]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh066"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh066.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh066_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh066_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh066_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh066_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh066_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh066_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh066_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh066_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh066_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh066_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box050"
                position={[22.163, -49.6, -101.482]}
                rotation={[-2.615, 0.129, -2.503]}
                scale={[0, 0, 0.003]}
              >
                <mesh
                  name="Mesh067"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh067.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh067_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh067_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh067_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh067_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh067_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh067_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh067_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh067_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh067_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh067_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box051"
                position={[-47.546, -21.881, -79.189]}
                rotation={[2.884, -0.288, -0.561]}
                scale={[0, 0, 0.002]}
              >
                <mesh
                  name="Mesh068"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh068.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh068_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh068_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh068_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh068_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh068_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh068_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh068_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh068_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh068_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh068_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box052"
                position={[42.161, -16.248, -144.443]}
                rotation={[-2.31, -0.674, -3.029]}
                scale={[0, 0, 0.035]}
              >
                <mesh
                  name="Mesh069"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh069.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh069_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh069_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh069_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh069_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh069_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh069_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh069_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh069_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh069_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh069_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box053"
                position={[40.512, -26.038, -132.751]}
                rotation={[1.487, 0.041, -0.639]}
                scale={[0, 0, 0.001]}
              >
                <mesh
                  name="Mesh070"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh070.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh070_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh070_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh070_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh070_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh070_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh070_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh070_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh070_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh070_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh070_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box054"
                position={[41.596, -21.297, -138.443]}
                scale={0}
              >
                <mesh
                  name="Mesh071"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh071.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh071_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh071_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh071_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh071_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh071_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh071_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh071_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh071_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh071_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh071_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box055"
                position={[42.158, -16.268, -144.42]}
                scale={0}
              >
                <mesh
                  name="Mesh072"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh072.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh072_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh072_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh072_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh072_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh072_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh072_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh072_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh072_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh072_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh072_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Box056"
                position={[42.158, -16.268, -144.42]}
                rotation={[-1.493, -0.371, 0.54]}
                scale={[0, 0, 0.046]}
              >
                <mesh
                  name="Mesh073"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh073.geometry}
                  material={materials["Material #37"]}
                />
                <mesh
                  name="Mesh073_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh073_1.geometry}
                  material={materials["Material #25"]}
                />
                <mesh
                  name="Mesh073_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh073_2.geometry}
                  material={materials["Material #30"]}
                />
                <mesh
                  name="Mesh073_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh073_3.geometry}
                  material={materials["Material #29"]}
                />
                <mesh
                  name="Mesh073_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh073_4.geometry}
                  material={materials["Material #31"]}
                />
                <mesh
                  name="Mesh073_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh073_5.geometry}
                  material={materials["Material #28"]}
                />
              </group>
              <group
                name="Helix004"
                position={[-7.536, -16.248, -144.443]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
          </group>
          <group name="Null_2" position={[-1.796, -3.568, -6.656]}>
            <group
              name="Null_2_2"
              position={[0.001, -2.126, 2.038]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1.7}
            >
              <mesh
                name="Baselow_low"
                castShadow
                receiveShadow
                geometry={nodes.Baselow_low.geometry}
                material={nodes.Baselow_low.material}
                position={[-0.184, -0.956, 0.78]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.588}
              />
            </group>
            <group name="Null_3" position={[-0.001, 2.126, -2.08]}>
              <skinnedMesh
                name="Bearbrick_Chest"
                geometry={nodes.Bearbrick_Chest.geometry}
                material={materials.Mat}
                skeleton={nodes.Bearbrick_Chest.skeleton}
              />
              <skinnedMesh
                name="Bearbrick_Head"
                geometry={nodes.Bearbrick_Head.geometry}
                material={materials.Mat}
                skeleton={nodes.Bearbrick_Head.skeleton}
              />
              <mesh
                name="Default"
                castShadow
                receiveShadow
                geometry={nodes.Default.geometry}
                material={materials.lambert2SG}
                position={[-0.49, -2.545, -11.063]}
                rotation={[0.118, 0.108, 0.005]}
                scale={0.633}
              />
              <group
                name="glasses_OBJ_OBJ"
                position={[0.24, 0.109, -6.855]}
                rotation={[-1.665, 0.135, 0.045]}
                scale={[3.967, 3.333, 3.333]}
              >
                <mesh
                  name="Frame"
                  castShadow
                  receiveShadow
                  geometry={nodes.Frame.geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  name="Handles"
                  castShadow
                  receiveShadow
                  geometry={nodes.Handles.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <skinnedMesh
                name="Hand"
                geometry={nodes.Hand.geometry}
                material={materials.Mat}
                skeleton={nodes.Hand.skeleton}
              />
              <skinnedMesh
                name="Hand_1"
                geometry={nodes.Hand_1.geometry}
                material={materials.Mat}
                skeleton={nodes.Hand_1.skeleton}
              />
              <skinnedMesh
                name="Leg"
                geometry={nodes.Leg.geometry}
                material={materials.Mat}
                skeleton={nodes.Leg.skeleton}
              />
              <skinnedMesh
                name="Object002"
                geometry={nodes.Object002.geometry}
                material={materials.Mat}
                skeleton={nodes.Object002.skeleton}
              />
              <skinnedMesh
                name="Pelvis"
                geometry={nodes.Pelvis.geometry}
                material={materials.Mat}
                skeleton={nodes.Pelvis.skeleton}
              />
              <primitive object={nodes.mixamorig_Hips} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default MafiaBearDance6;

useGLTF.preload("/new_bear_model/mafia_dance/mafia-bear.glb");
