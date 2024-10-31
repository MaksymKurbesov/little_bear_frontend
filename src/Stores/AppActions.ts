import { IUser } from "../Api/UserApi.ts";

export type Action =
  | { type: "SET_DAILY_REWARD_TIME_LEFT"; payload: string }
  | { type: "ADD_CLICKED_POINTS"; payload: number }
  | { type: "ADD_USER_POINTS"; payload: number }
  | { type: "ADD_CLICK"; payload: { id: number; x: number; y: number } }
  | { type: "REMOVE_CLICK"; payload: number }
  | { type: "RESET_CLICKED_POINTS" }
  | { type: "SET_USER_POINTS"; payload: number }
  | { type: "SET_USER"; payload: IUser }
  | { type: "SET_USER_LEVEL"; payload: number }
  | { type: "SET_SKIN"; payload: string }
  | {
      type: "HANDLE_CARD_CLICK";
      payload: {
        pointsToAdd: number;
        click: { id: number; x: number; y: number };
      };
    }
  | { type: "UPDATE_USER_DATA"; payload: Partial<IUser> };
