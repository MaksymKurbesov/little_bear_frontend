import styles from "./Bear.module.css";
import { Canvas } from "@react-three/fiber";
import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppState } from "../../../Stores/AppStateContext.tsx";
import LoadSpinning from "../../../SharedUI/LoadSpinning/LoadSpinning.tsx";
import { useTelegram } from "../../../hooks/useTelegram.ts";
import { OrbitControls } from "@react-three/drei";
import {
  debounce,
  getLevelByPoints,
  triggerVibration,
} from "../../../utils/helpers.ts";
import Lights from "../../../SharedUI/Lights/Lights.tsx";
import { userApi } from "../../../main.tsx";
const BearDance1 = lazy(() => import("../../../Bears3D/BearDance1.tsx"));
const BearDance2 = lazy(() => import("../../../Bears3D/BearDance2.tsx"));
const BearDance3 = lazy(() => import("../../../Bears3D/BearDance3.tsx"));
const BearDance4 = lazy(() => import("../../../Bears3D/BearDance4.tsx"));
const BearDance5 = lazy(() => import("../../../Bears3D/BearDance5.tsx"));
const BearDance6 = lazy(() => import("../../../Bears3D/BearDance6.tsx"));
const MafiaBearDance = lazy(
  () => import("../../../Bears3D/MafiaDanceBear.tsx"),
);
const Stand1 = lazy(() => import("../../../SharedUI/Stands/Stand1.tsx"));
const Stand2 = lazy(() => import("../../../SharedUI/Stands/Stand2.tsx"));
const Stand3 = lazy(() => import("../../../SharedUI/Stands/Stand3.tsx"));
const Stand4 = lazy(() => import("../../../SharedUI/Stands/Stand4.tsx"));
const Stand5 = lazy(() => import("../../../SharedUI/Stands/Stand5.tsx"));
const Stand6 = lazy(() => import("../../../SharedUI/Stands/Stand6.tsx"));
import { v4 as uuidv4 } from "uuid";
import LevelUp from "../../../SharedUI/LevelUp/LevelUp.tsx";
import { POINTS_TO_ADD } from "../../../utils/consts.ts";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationAction, AnimationClip } from "three";
import eventEmitter from "../../../utils/eventEmitter.ts";

export type GLTFWithAnimations = GLTF & {
  animations: AnimationClip[];
};

const danceBearComponents = [
  { level: 1, Component: BearDance1, Stand: Stand1, name: "timber" },
  { level: 2, Component: MafiaBearDance, Stand: Stand2, name: "brickn" },
  { level: 3, Component: BearDance3, Stand: Stand3, name: "aztron" },
  { level: 4, Component: BearDance4, Stand: Stand4, name: "brizzy" },
  { level: 5, Component: BearDance5, Stand: Stand5, name: "neyon" },
];

const Bear = () => {
  const { state, dispatch } = useAppState();
  const { tg, user } = useTelegram();
  const [action, setAction] = useState<AnimationAction>();
  const [levelUpModal, setLevelUpModal] = useState(false);
  const controlsRef = useRef();
  const [currentUserLevel, setCurrentUserLevel] = useState(0);

  const clickedPointsRef = useRef(0);

  useEffect(() => {
    if (!state.user) return;

    const level = getLevelByPoints(state.user.points);
    setCurrentUserLevel(level);
  }, []);

  const handleActionReady = useCallback((action: AnimationAction) => {
    setAction(action);
  }, []);

  const sendPointsToServer = async (pointsToSend) => {
    if (pointsToSend <= 0 || !user) return;

    try {
      if (!action) return;

      const isMultiplyAnimations = Array.isArray(action);

      if (isMultiplyAnimations) {
        action.forEach((item) => (item.paused = true));
      } else {
        action.paused = true;
      }

      const currentUserPoints = await userApi.sendPointsToServer(
        user.id,
        pointsToSend,
      );
      eventEmitter.emit("externalClick");

      if (!currentUserPoints) {
        return;
      }

      const newLevel = getLevelByPoints(currentUserPoints);

      if (currentUserLevel < newLevel) {
        setLevelUpModal(true);
        setCurrentUserLevel(newLevel);
        console.log(
          `Congratulations! You've reached Level ${currentUserLevel}`,
        );
      }
    } catch (error) {
      console.error("Error sending points to server:", error);
    }
  };

  const debouncedSendPointsToServer = useCallback(() => {
    clearTimeout(debouncedSendPointsToServer.timeout);
    debouncedSendPointsToServer.timeout = setTimeout(() => {
      const pointsToSend = clickedPointsRef.current;
      clickedPointsRef.current = 0; // Reset points before sending to avoid double-sending
      sendPointsToServer(pointsToSend);
    }, 500); // 500ms debounce
  }, [action]);

  const handleCardClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!action) return;
      console.log("clicked");

      triggerVibration(tg);

      const pointsToAdd = POINTS_TO_ADD[state.currentSkin];
      clickedPointsRef.current += pointsToAdd;

      const isMultiplyAnimations = Array.isArray(action);

      if (isMultiplyAnimations) {
        action.forEach((item) => item.play());
      } else {
        action.play();
      }

      if (isMultiplyAnimations) {
        action.forEach((item) => {
          if (item.paused) {
            item.paused = false;
          }
        });
      } else {
        if (action.paused) {
          action.paused = false;
        }
      }

      dispatch({
        type: "HANDLE_CARD_CLICK",
        payload: {
          pointsToAdd: pointsToAdd,
          click: { id: uuidv4(), x: e.clientX, y: e.clientY },
        },
      });

      eventEmitter.emit("localEnergy");

      debouncedSendPointsToServer();
    },
    [dispatch, action, tg, state.level, debouncedSendPointsToServer],
  );

  return (
    <>
      {levelUpModal && state.user ? (
        <LevelUp
          onCollectHandler={() => {
            if (!state.user) return;

            setLevelUpModal(false);
          }}
          level={getLevelByPoints(state.user.points)}
        />
      ) : null}
      <div className={styles["main-image-wrapper"]} onClick={handleCardClick}>
        <Suspense
          fallback={
            <div className={"suspense"}>
              <LoadSpinning />
            </div>
          }
        >
          <Canvas shadows camera={{ position: [0, 1.1, 5] }}>
            <Lights>
              <group
                position={[0, -0.4, 3.2]}
                rotation={[0, 0, 0]}
                scale={0.47}
              >
                <group position={[0, -0.1, 0]}>
                  {danceBearComponents.map(
                    ({ level, name, Component, Stand }) => {
                      if (state.currentSkin !== name) return;

                      return (
                        <React.Fragment key={level}>
                          <Component handleActionReady={handleActionReady} />
                          <Stand />
                        </React.Fragment>
                      );
                    },
                  )}
                </group>

                {/*<OrbitControls ref={controlsRef} />*/}
              </group>
            </Lights>
          </Canvas>
        </Suspense>
      </div>
    </>
  );
};

export default Bear;
