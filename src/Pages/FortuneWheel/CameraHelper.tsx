import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { PerfHeadless, usePerf } from "r3f-perf";

const PerfHook = () => {
  // getPerf() is also available for non-reactive way
  const [gl, log, getReport] = usePerf((s) => s[(s.gl, s.log, s.getReport)]);
  console.log(gl, log, getReport());
  return <PerfHeadless />;
};

const CameraHelper = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const cameraRef2 = useRef<THREE.PerspectiveCamera>(null);

  useHelper(cameraRef, THREE.CameraHelper, "red");
  useHelper(cameraRef2, THREE.CameraHelper, "green");

  const camera = useThree((state) => state.camera);

  return (
    <>
      {/*<PerfHook />*/}
      {/*<PerspectiveCamera*/}
      {/*  position={[0, -0.3, 3.2]}*/}
      {/*  fov={80}*/}
      {/*  // makeDefault*/}
      {/*  near={1}*/}
      {/*  // ref={cameraRef2}*/}
      {/*/>*/}
      <PerspectiveCamera
        position={[-1.5, -0.4, 2.5]}
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
