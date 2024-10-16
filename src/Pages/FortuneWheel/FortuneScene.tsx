import { Suspense } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Wheel from "./Wheel/Wheel.tsx";
import FortuneEnviroment from "./FortuneEnviroment.tsx";
import BearMafia from "../../Bears3D/MafiaBear.tsx";

const FortuneScene = ({ handleActionReady, animatedRotation }) => {
  return (
    <>
      <FortuneEnviroment />
      <BearMafia handleActionReady={handleActionReady} />
      <Wheel animatedRotation={animatedRotation} />
      <Suspense fallback={null}>
        <EffectComposer disableNormalPass multisampling={0}>
          <Bloom
            intensity={1.5} // The bloom intensity.
            luminanceThreshold={0.8} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.2} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={true}
            levels={3}
          />
        </EffectComposer>
      </Suspense>
    </>
  );
};

export default FortuneScene;
