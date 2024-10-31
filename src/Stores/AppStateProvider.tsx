import React, { ReactNode, useEffect, useReducer } from "react";
import { reducer } from "./AppReducer.ts";
import { initialState } from "./AppState.ts";
import { subscribeToUserChanges } from "../Api/UserSubscriber.ts";
import { AppStateContext } from "./AppContext.tsx";

interface AppStateProviderProps {
  children: ReactNode;
  userId: number;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  userId,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!userId) return;

    const unsubscribe = subscribeToUserChanges(userId, dispatch);

    return () => unsubscribe();
  }, [userId]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
