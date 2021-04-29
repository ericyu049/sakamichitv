import { createAction, props } from "@ngrx/store";

export const switchMenuAction = createAction('[Menu] Switch Menu State');

export const fetchChannelDetail = createAction('[Video] Fetching Channel Detail', props<{ request }>());
export const fetchChannelDetailSuccess = createAction('[Video] Fetch Channel Detail Success', props<{ results }>());
export const fetchChannelDetailError = createAction('[Video] Fetch Channel Detail Error', props<{ error }>());

export const searchVideos = createAction('[Search] Search videos', props<{ searchRequest }>());
export const searchVideosSuccess = createAction('[Search] Search Videos Success', props<{ searchResult }>());
export const searchVideosError = createAction('[Search] Search Videos Error', props<{ error }>());

export const ActionTypes = {
    switchMenuAction,
    fetchChannelDetailError,
    fetchChannelDetailSuccess,
    fetchChannelDetail,
    searchVideos,
    searchVideosError,
    searchVideosSuccess
}