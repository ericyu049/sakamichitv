import { Action, createReducer, on, State } from "@ngrx/store";
import { ActionTypes } from "./app.action";
import { AppState, initialAppState } from "./app.state";

export const reducer = createReducer(
    initialAppState,
    on(ActionTypes.switchSideNav, (state, action) => ({
        ...state, sideNavState: action.state
    })),
);
export function AppReducer(state: AppState | undefined , action: Action) {
    return reducer(state, action);
}