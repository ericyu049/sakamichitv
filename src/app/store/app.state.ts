export interface AppState {
    menuOpen: boolean;
    request: any;
    searchRequest: any;
    searchResult: any;
    searchError: any;
    channelRequest: any;
    channelResponse: any;
    channelError: any;
}
export const initialAppState: AppState = {
    menuOpen: false,
    request: null,
    searchRequest: null,
    searchResult: null,
    searchError: null,
    channelRequest: null,
    channelError: null,
    channelResponse: null
}