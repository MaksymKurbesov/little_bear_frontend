import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Suspense } from "react";
import {
  AirdropPage,
  DailyRewardPage,
  FriendsPage,
  LeadersPage,
  MainPage,
  MarketPage,
  SettingsPage,
  SkinsPage,
  TasksPage,
  FortuneWheelPage,
  FortuneWheelRulesPage,
  CheckoutPage,
  NewsPage,
} from "./lazyImports.ts";
import LoadSpinning from "./SharedUI/LoadSpinning/LoadSpinning.tsx";
import News from "./Pages/News/News.tsx";
import OneNews from "./Pages/OneNews/OneNews.tsx";
import FortuneWheel from "./Pages/FortuneWheel/FortunePage.tsx";
import FortuneWheelRules from "./Pages/FortuneWheelRules/FortuneWheelRules.tsx";
import Checkout from "./Pages/Checkout/Checkout.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div style={{ flexGrow: 1 }}>
                <LoadSpinning />
              </div>
            }
          >
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: "/referrals",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <FriendsPage />
          </Suspense>
        ),
      },
      {
        path: "/leaders",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <LeadersPage />
          </Suspense>
        ),
      },
      {
        path: "/daily-reward",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <DailyRewardPage />
          </Suspense>
        ),
      },
      {
        path: "/news",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <NewsPage />
          </Suspense>
        ),
      },
      {
        path: "/news/:newsId",
        element: <OneNews />,
      },
      {
        path: "/airdrop",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <AirdropPage />
          </Suspense>
        ),
      },
      {
        path: "/tasks",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <TasksPage />
          </Suspense>
        ),
      },
      {
        path: "/settings",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <SettingsPage />
          </Suspense>
        ),
      },
      {
        path: "/skins",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <SkinsPage />
          </Suspense>
        ),
      },
      {
        path: "/market",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <MarketPage />
          </Suspense>
        ),
      },
      {
        path: "/fortune-wheel",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <FortuneWheelPage />
          </Suspense>
        ),
      },
      {
        path: "/fortune-wheel-rules",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <FortuneWheelRulesPage />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense
            fallback={
              <div className={"suspense"}>
                <LoadSpinning />
              </div>
            }
          >
            <CheckoutPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
