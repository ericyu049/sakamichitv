import { HttpClient } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ActionTypes } from "src/app/store/app.action";
import { selectVideoResults } from "src/app/store/app.selector";
import { AppState } from "src/app/store/app.state";

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    isOpen = true;
    videos = [];
    text = '123';
    doneLoading = false;
    constructor(private http: HttpClient, private store: Store<AppState>) { }
    ngOnInit(): void {
        if (sessionStorage.getItem('videos') === null) {
            this.store.dispatch(ActionTypes.searchVideos({searchRequest: {
                part: 'snippet',
                maxResults: 32,
                q: '乃木坂46　櫻坂46　欅坂46　日向坂46　けやき坂46',
                type: 'video',
                key: ''
            }}));
        }
        else {
            this.videos = JSON.parse(sessionStorage.getItem('videos'));
        }
        this.store.pipe(select(selectVideoResults)).subscribe(data => {
            if (data) {
                console.log('hi');
                this.videos = Array.from(data)
                this.doneLoading = true;
            }
        })
    }
    goToVideo(video) {
        sessionStorage.setItem('video', JSON.stringify(video));
        window.location.href="/sakamichitv/viewer.html";
    }
}