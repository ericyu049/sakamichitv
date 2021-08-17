import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const getAppState = (state: any) => state.sakamichi;

export const selectSideNavState = createSelector(getAppState, (state: AppState) => state.sideNavState);
