import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { select, Store } from "@ngrx/store";
import { ActionTypes } from "src/app/store/app.action";
import { selectChannelDetail } from "src/app/store/app.selector";
import { AppState } from "src/app/store/app.state";

@Component({
    selector: 'viewer-comp',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
    video;
    url;
    channelAvatar;
    subscriberCount;
    doneLoading = false;
    constructor(private domSanitizer: DomSanitizer, private http: HttpClient, private store: Store<AppState>) {

    }
    ngOnInit(): void {
        this.video = JSON.parse(sessionStorage.getItem('video'));
        this.url = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.video.id.videoId);
        this.store.dispatch(ActionTypes.fetchChannelDetail({ request: this.video.snippet.channelId }));
        this.store.pipe(select(selectChannelDetail)).subscribe(
            data => {
                if (data) {
                    console.log(data);
                    this.channelAvatar = data.items[0].snippet.thumbnails.high.url;
                    this.subscriberCount = data.items[0].statistics.subscriberCount;
                    this.doneLoading = true;
                }
            }
        )
    }
}