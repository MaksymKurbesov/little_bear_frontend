import { IUser } from "../Api/UserApi.ts";
import { generateUserData, getLevelByPoints } from "../utils/helpers.ts";
import { userApi } from "../main.tsx";

class UserService {
  private dispatch: any;

  constructor(dispatch: any) {
    this.dispatch = dispatch;
  }

  async setUserData(userData: IUser): Promise<void> {
    this.dispatch({ type: "SET_USER_POINTS", payload: userData.points });
    this.dispatch({ type: "SET_USER", payload: userData });
    this.dispatch({
      type: "SET_USER_LEVEL",
      payload: getLevelByPoints(userData.points),
    });
    await userApi.checkDailyReward(userData.id.toString(), this.dispatch);
  }

  async registerUser(
    user: WebAppUser,
    referralId: string,
    isPremium: boolean,
  ): Promise<void> {
    if (!user.username) return;

    const registeredUser: IUser = generateUserData(user.username, user.id);
    await userApi.addUser(registeredUser);
    this.dispatch({ type: "SET_USER", payload: registeredUser });

    if (referralId) {
      await userApi.addReferral(user.id.toString(), referralId, isPremium);
      this.dispatch({
        type: "ADD_USER_POINTS",
        payload: isPremium ? 14000 : 7500,
      });
    }
  }
}

export default UserService;

//
