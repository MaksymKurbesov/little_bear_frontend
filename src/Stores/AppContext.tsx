import React, { createContext } from "react";

import { Action } from "./AppActions.ts";
import { State } from "./AppState.ts";

export const AppStateContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);
