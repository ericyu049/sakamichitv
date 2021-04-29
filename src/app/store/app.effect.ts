import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createAction } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';
import { AppService } from "../service/app.service";
import { ActionTypes } from "./app.action";
@Injectable()
export class AppEffects {
    constructor(private actions: Actions, private service: AppService) {

    }
    loadSearchResults = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.searchVideos),
            switchMap(action =>
                this.service.searchVideos(action.searchRequest).pipe(
                    map((data: any) => {
                        if (data && data.items) {
                            const ids = data.items.map(x => x.id.videoId);
                            const query = {
                                part: 'statistics, contentDetails',
                                maxResults: 32,
                                id: ids.join(','),
                                key: ''
                            }
                            const firstresult = {
                                items: data.items,
                                query: query
                            }
                            return firstresult;
                        }
                    })
                )
            ),
            switchMap(action =>
                this.service.getVideoStats(action.query).pipe(
                    map((data: any) => {
                        for (let index = 0; index < data.items.length; index++) {
                            action.items[index].details = data.items[index].contentDetails
                            action.items[index].stats = data.items[index].statistics
                        }
                        sessionStorage.setItem('videos', JSON.stringify(action.items));
                        return ActionTypes.searchVideosSuccess({ searchResult: action.items });
                    }),
                    catchError((error: Error) => {
                        return of(ActionTypes.searchVideosError({ error: error }));
                    })
                )
            )
        )
    );
    loadChannelDetails = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.fetchChannelDetail),
            switchMap(action =>
                this.service.getChannelDetail(action.request).pipe(
                    map((data: any) => {
                        if (data) {
                            return ActionTypes.fetchChannelDetailSuccess({ results: data });
                        }
                        else return ActionTypes.fetchChannelDetailError({ error: 'Error getting channel details' });
                    }),
                    catchError((error: Error) => {
                        return of(ActionTypes.fetchChannelDetailError({ error: error }));
                    })
                )
            )
        )
    );
}