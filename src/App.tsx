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
import { getLittleBearId } from "./utils/helpers.ts";
import RegisteredModal from "./SharedUI/RegisteredModal/RegisteredModal.tsx";

import UserService from "./Services/UserService.ts";
import { useTranslation } from "react-i18next";
import LoadSpinning from "./SharedUI/LoadSpinning/LoadSpinning.tsx";
import { userApi } from "./main.tsx";

const BACKGROUND_MAP = {
  "/airdrop": "background-image-airdrop",
  "/skins": "background-image-skins",
};

const BEAR_BACKGROUNDS = [
  "background-image-main",
  "background-image-main2",
  "background-image-main3",
  "background-image-main4",
  "background-image-main5",
];

const App = () => {
  const { user } = useTelegram();
  const { i18n } = useTranslation();
  const { state, dispatch } = useAppState();
  const [userIsRegistered, setUserIsRegistered] = useState<boolean | null>(
    null,
  );
  const [showStartPopup, setShowStartPopup] = useState(false);
  const location = useLocation();
  const backgroundClassName = BACKGROUND_MAP[location.pathname];
  const bearBackgroundCN = BEAR_BACKGROUNDS[state.level - 1];

  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  // const [videoIsEnd, setVideoIsEnd] = useState(false);

  useEffect(() => {
    if (!user) return;

    if (state.user) {
      i18n.changeLanguage(state.user.settings.language);
    }

    const userService = new UserService(dispatch);

    userApi.checkUserExists(user.id).then((isExist) => {
      if (!isExist) {
        const refID = getLittleBearId(location.search) || "";
        const isPremium = !!user.is_premium;
        setUserIsRegistered(false);
        userService.registerUser(user, refID, isPremium);
      }
    });
  }, [user, dispatch, location.search]);
  // }, [user, userData, dispatch, error, location.search]);

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
      className={`${styles["game-wrapper"]} ${styles[backgroundClassName]} ${styles[bearBackgroundCN]}`}
    >
      {/*<div key={"register-modal"}>*/}
      {!userIsRegistered ? (
        <RegisteredModal closeHandler={() => setUserIsRegistered(true)} />
      ) : null}
      {/*</div>*/}
      <Header pathname={location.pathname} />
      <Outlet />
      <Menu />
    </div>
  );
};

export default App;
