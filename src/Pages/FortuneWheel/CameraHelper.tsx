import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";

const CameraHelper = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const cameraRef2 = useRef<THREE.PerspectiveCamera>(null);

  useHelper(cameraRef, THREE.CameraHelper, "red");
  useHelper(cameraRef2, THREE.CameraHelper, "green");

  const camera = useThree((state) => state.camera);
  // console.log(state, "state.camera");

  // ov – Camera frustum vertical field of view. Default 50.
  // aspect – Camera frustum aspect ratio. Default 1.
  // near – Camera frustum near plane. Default 0.1.
  //   far – Camera frustum far plane. Default 2000.
  //
  return (
    <>
      {/*<PerspectiveCamera*/}
      {/*  position={[0, -0.3, 3.2]}*/}
      {/*  fov={80}*/}
      {/*  // makeDefault*/}
      {/*  near={1}*/}
      {/*  // ref={cameraRef2}*/}
      {/*/>*/}
      <PerspectiveCamera
        position={[0, -0.3, 3.2]}
        fov={80}
        makeDefault
        near={1}
        // ref={cameraRef}
      />
      <OrbitControls />
    </>
  );
};

export default CameraHelper;
