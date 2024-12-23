import { State, initialState } from "./AppState";
import { Action } from "./AppActions";
import { IUser } from "../Api/UserApi.ts";

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "SET_DAILY_REWARD_TIME_LEFT":
      return { ...state, dailyRewardTimeLeft: action.payload };

    case "ADD_CLICKED_POINTS":
      return { ...state, clickedPoints: state.clickedPoints + action.payload };

    case "ADD_USER_POINTS":
      return {
        ...state,
        user: {
          ...state.user,
          points: state.user!.points + action.payload,
        } as IUser,
      };

    case "ADD_CLICK":
      return { ...state, clicks: [...state.clicks, action.payload] };

    case "RESET_CLICKED_POINTS":
      return { ...state, clickedPoints: 0 };

    case "SET_USER_LEVEL":
      return { ...state, level: action.payload };

    case "SET_USER_POINTS":
      return {
        ...state,
        user: {
          ...state.user,
          points: action.payload,
        } as IUser,
      };

    case "REMOVE_CLICK":
      return {
        ...state,
        clicks: state.clicks.filter((click) => click.id !== action.payload),
      };

    case "SET_SKIN":
      return { ...state, currentSkin: action.payload };

    case "SET_USER":
      return { ...state, user: action.payload };

    case "UPDATE_USER_DATA":
      return { ...state, user: { ...state.user, ...action.payload } as IUser };

    case "HANDLE_CARD_CLICK":
      return {
        ...state,
        user: {
          ...state.user,
          points: state.user!.points + action.payload.pointsToAdd,
        } as IUser,
        clickedPoints: state.clickedPoints + action.payload.pointsToAdd,
        clicks: [...state.clicks, action.payload.click],
      };

    default:
      return state;
  }
};
