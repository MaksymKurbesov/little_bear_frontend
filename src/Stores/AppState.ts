import { IUser } from "../Api/UserApi.ts";

export interface State {
  dailyRewardTimeLeft: string;
  earnedPoints: number;
  clickedPoints: number;
  clicks: { id: number; x: number; y: number }[];
  user: IUser | null;
  hasClaimedToday: boolean;
  currentSkin: string;
  level: number;
}

export const initialState: State = {
  dailyRewardTimeLeft: "",
  earnedPoints: 0,
  clickedPoints: 0,
  clicks: [],
  user: null,
  hasClaimedToday: false,
  currentSkin: "",
  level: 1,
};
