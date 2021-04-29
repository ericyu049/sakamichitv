import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const getAppState = (state: any) => state.haha;
export const selectVideoResults = createSelector(getAppState, (state: AppState) => state.searchResult);
export const selectChannelDetail = createSelector(getAppState, (state: AppState) => state.channelResponse);