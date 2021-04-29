import { Action, createReducer, on, State } from "@ngrx/store";
import * as AppActions from "./app.action";
import { AppState, initialAppState } from "./app.state";

export const reducer = createReducer(
    initialAppState,
    on(AppActions.switchMenuAction, (state) => ({
        ...state, menuOpen: !state.menuOpen
    })),
    on(AppActions.searchVideos, (state, action) => ({
        ...state, searchRequest: action.searchRequest, searchResult: null, searchError: null
    })),
    on(AppActions.searchVideosSuccess, (state, action) => ({
        ...state, searchRequest: null, searchResult: action.searchResult, searchError: null
    })),
    on(AppActions.searchVideosError, (state, action) => ({
        ...state, searchRequest:null, searchResult: null, searchError: action.error
    })),
    on(AppActions.fetchChannelDetail, (state, action) => ({
        ...state, channelRequest: action.request, channelResponse: null, channelError: null
    })),
    on(AppActions.fetchChannelDetailSuccess, (state, action) => ({
        ...state, channelRequest: null, channelResponse: action.results, channelError: null
    })),
    on(AppActions.fetchChannelDetailError, (state, action) => ({
        ...state, channelRequest: null, channelResponse: null, channelError: action.error
    }))
);
export function AppReducer(state: AppState | undefined , action: Action) {
    return reducer(state, action);
}