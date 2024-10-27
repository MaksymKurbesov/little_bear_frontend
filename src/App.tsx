import styles from "./App.module.css";
import Header from "./SharedUI/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./SharedUI/Menu/Menu";
import { useEffect, useState } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { useGetUserQuery } from "./Stores/slices/apiSlice.ts";
import { useAppState } from "./Stores/AppStateContext.tsx";
import StartBearVideo from "./Pages/StartBearVideo/StartBearVideo.tsx";
import LoadingScreen from "./Pages/LoadingScreen/LoadingScreen.tsx";
import { getLevelByPoints, getLittleBearId } from "./utils/helpers.ts";
import RegisteredModal from "./SharedUI/RegisteredModal/RegisteredModal.tsx";

import UserService from "./Services/UserService.ts";
import { useTranslation } from "react-i18next";
import LoadSpinning from "./SharedUI/LoadSpinning/LoadSpinning.tsx";
import { dailyRewardsApi, userApi } from "./main.tsx";
import { SKINS } from "./utils/consts.ts";

const BACKGROUND_MAP = {
  "/airdrop": "background-image-airdrop",
  "/skins": "background-image-skins",
};

const BEAR_BACKGROUNDS = {
  timber: "background-image-main",
  brickn: "background-image-main2",
  aztron: "background-image-main3",
  brizzy: "background-image-main4",
  neyon: "background-image-main5",
  mickey: "background-mafia-bear",
};

const App = () => {
  const { user } = useTelegram();
  const { i18n } = useTranslation();
  const { state, dispatch } = useAppState();
  const [showStartPopup, setShowStartPopup] = useState(false);

  const [bgSkin, setbgSkin] = useState("");
  const location = useLocation();
  const backgroundClassName = BACKGROUND_MAP[location.pathname];
  const bearBackgroundCN = BEAR_BACKGROUNDS[state.currentSkin];

  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  // const [videoIsEnd, setVideoIsEnd] = useState(false);

  useEffect(() => {
    if (!state.user) return;

    if (state.user.skin) {
      dispatch({ type: "SET_SKIN", payload: state.user.skin });

      setbgSkin(BEAR_BACKGROUNDS[state.currentSkin]);
    } else {
      const currentLevel = getLevelByPoints(state.user.points);
      const currentBg = Object.values(BEAR_BACKGROUNDS)[currentLevel - 1];
      dispatch({ type: "SET_SKIN", payload: SKINS[currentLevel - 1].name });

      setbgSkin(currentBg);
    }
  }, [state.user]);

  useEffect(() => {
    const fetchDailyReward = async () => {
      if (!user) return;

      const userID = String(user.id);

      const hasClaimedToday = await dailyRewardsApi.userIsClaimedToday(userID);

      const consecutiveDays =
        await dailyRewardsApi.getConsecutiveClaimedDays(userID);

      dispatch({
        type: "UPDATE_USER_DATA",
        payload: {
          hasClaimedToday,
          consecutiveDays,
        },
      });
    };

    fetchDailyReward();
  }, [user]);

  useEffect(() => {
    if (!user || !state.user) return;

    if (state.user) {
      i18n.changeLanguage(state.user.settings.language);
    }

    const userService = new UserService(dispatch);

    userApi.checkUserExists(user.id).then((isExist) => {
      if (!isExist) {
        setShowStartPopup(true);
        const refID = getLittleBearId(location.search) || "";
        const isPremium = !!user.is_premium;
        userService.registerUser(user, refID, isPremium);
      }
    });
  }, [user, state.user, dispatch, location.search]);

  // COMMENT FOR DEV //
  // if (isLoadingScreen) {
  //   return <LoadingScreen setIsLoadingScreen={setIsLoadingScreen} />;
  // }
  // COMMENT FOR DEV //

  // TROUBLE WITH VIDEO
  // if (!userIsRegistered && !userData) {
  //   return (
  //     <StartBearVideo
  //       setUserIsRegistered={setUserIsRegistered}
  //       setVideoIsEnd={setVideoIsEnd}
  //       refetch={refetch}
  //     />
  //   );
  // }

  if (!state.user) {
    return (
      <div className={"suspense"}>
        <LoadSpinning />
      </div>
    );
  }

  return (
    <div
      className={`${styles["game-wrapper"]} ${styles[bgSkin]} ${styles[backgroundClassName]} ${styles[bearBackgroundCN]}`}
    >
      {showStartPopup && (
        <RegisteredModal closeHandler={() => setShowStartPopup(false)} />
      )}
      <Header pathname={location.pathname} />
      <Outlet />
      <Menu />
    </div>
  );
};

export default App;
