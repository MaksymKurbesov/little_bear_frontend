import styles from "./Bear.module.css";
import { Canvas } from "@react-three/fiber";
import React, { lazy, Suspense, useCallback, useRef, useState } from "react";
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
const Stand1 = lazy(() => import("../../../SharedUI/Stands/Stand1.tsx"));
const Stand2 = lazy(() => import("../../../SharedUI/Stands/Stand2.tsx"));
const Stand3 = lazy(() => import("../../../SharedUI/Stands/Stand3.tsx"));
const Stand4 = lazy(() => import("../../../SharedUI/Stands/Stand4.tsx"));
const Stand5 = lazy(() => import("../../../SharedUI/Stands/Stand5.tsx"));
import { v4 as uuidv4 } from "uuid";
import LevelUp from "../../../SharedUI/LevelUp/LevelUp.tsx";
import { POINTS_TO_ADD } from "../../../utils/consts.ts";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationAction, AnimationClip } from "three";

export type GLTFWithAnimations = GLTF & {
  animations: AnimationClip[];
};

const danceBearComponents = [
  { level: 1, Component: BearDance1, Stand: Stand1 },
  { level: 2, Component: BearDance2, Stand: Stand2 },
  { level: 3, Component: BearDance3, Stand: Stand3 },
  { level: 4, Component: BearDance4, Stand: Stand4 },
  { level: 5, Component: BearDance5, Stand: Stand5 },
];

const Bear = () => {
  const { state, dispatch } = useAppState();
  const { tg, user } = useTelegram();
  const [action, setAction] = useState<AnimationAction>();
  const [levelUpModal, setLevelUpModal] = useState(false);
  const controlsRef = useRef();

  const clickedPointsRef = useRef(0);

  const handleActionReady = useCallback((action: AnimationAction) => {
    setAction(action);
  }, []);

  const sendPointsToServer = async (pointsToSend) => {
    if (pointsToSend <= 0 || !user) return;

    try {
      if (!action) return;

      action.paused = true;
      const currentUserPoints = await userApi.sendPointsToServer(
        user.id,
        pointsToSend,
      );

      if (!currentUserPoints) {
        return;
      }

      const currentLevel = getLevelByPoints(currentUserPoints);

      if (currentLevel > state.level) {
        setLevelUpModal(true);
        console.log(`Congratulations! You've reached Level ${currentLevel}`);
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

  // const debouncedSendPointsToServer = useCallback(
  //   debounce(() => {
  //     console.log(
  //       clickedPointsRef.current,
  //       "clickedPointsRef.current debounce",
  //     );
  //     sendPointsToServer().then(() => {
  //       console.log(clickedPointsRef.current, "clickedPointsRef.current then");
  //       clickedPointsRef.current = 0;
  //     });
  //   }, 1000),
  //   [action],
  // );

  const handleCardClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!action) return;

      triggerVibration(tg);

      const pointsToAdd = POINTS_TO_ADD[state.level - 1];
      clickedPointsRef.current += pointsToAdd;

      action.play();

      if (action.paused) {
        action.paused = false;
      }

      dispatch({
        type: "HANDLE_CARD_CLICK",
        payload: {
          pointsToAdd: pointsToAdd,
          click: { id: uuidv4(), x: e.clientX, y: e.clientY },
        },
      });

      debouncedSendPointsToServer();
    },
    [dispatch, action, tg, state.level, debouncedSendPointsToServer],
  );

  return (
    <>
      {levelUpModal ? (
        <LevelUp
          onCollectHandler={() => {
            dispatch({
              type: "SET_USER_LEVEL",
              payload: getLevelByPoints(state.user!.points),
            });
            setLevelUpModal(false);
          }}
          level={getLevelByPoints(state.user!.points)}
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
                  {danceBearComponents.map(({ level, Component, Stand }) => {
                    return (
                      state.level === level && (
                        <React.Fragment key={level}>
                          <Component handleActionReady={handleActionReady} />
                          <Stand />
                        </React.Fragment>
                      )
                    );
                  })}
                </group>

                <OrbitControls ref={controlsRef} />
              </group>
            </Lights>
          </Canvas>
        </Suspense>
        {/*<div className={styles["buttons-wrapper"]}>*/}
        {/*  <button*/}
        {/*    onClick={() => {*/}
        {/*      controlsRef.current.reset();*/}
        {/*    }}*/}
        {/*    className={styles["reset-camera"]}*/}
        {/*  >*/}
        {/*    Reset camera*/}
        {/*  </button>*/}
        {/*  <div className={styles["buttons"]}>*/}
        {/*    <button*/}
        {/*      onClick={() => {*/}
        {/*        // setDance(1);*/}
        {/*        dispatch({ type: "SET_SKIN_NUMBER", payload: 0 });*/}
        {/*        dispatch({ type: "SET_USER_LEVEL", payload: 1 });*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Dance 1*/}
        {/*    </button>*/}
        {/*    <button*/}
        {/*      onClick={() => {*/}
        {/*        // setDance(2);*/}
        {/*        dispatch({ type: "SET_SKIN_NUMBER", payload: 1 });*/}
        {/*        dispatch({ type: "SET_USER_LEVEL", payload: 2 });*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Dance 2*/}
        {/*    </button>*/}
        {/*    <button*/}
        {/*      onClick={() => {*/}
        {/*        // setDance(5);*/}
        {/*        dispatch({ type: "SET_SKIN_NUMBER", payload: 2 });*/}
        {/*        dispatch({ type: "SET_USER_LEVEL", payload: 3 });*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Dance 5*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Bear;
