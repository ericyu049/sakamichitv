import { createAction, props } from "@ngrx/store";

const switchSideNav = createAction('[Side Nav] Switch Sidenav Status', props<{ state }>());

export const ActionTypes = {
    switchSideNav
}