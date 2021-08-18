import { Component, HostListener, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppService } from "src/app/service/app.service";
import { selectSideNavState } from "src/app/store/app.selector";
import { AppState } from "src/app/store/app.state";

@Component({
    selector: 'channel-comp',
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
    videos = [];
    nzflex;
    miniMode;
    channel;
    doneLoading: boolean = false;
    constructor(private store: Store<AppState>, private service: AppService) {

    }

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.checkScreenWidth();
    }
    ngOnInit() {
        this.getVideos();
        this.checkScreenWidth();
        this.store.pipe(select(selectSideNavState)).subscribe(
            (data) => {
                this.miniMode = !data;
            }
        )
    }
    getVideos() {
        if (window.location.hostname === 'localhost') {
            this.service.getKeyakizakaVideos().subscribe(
                (data: any) => {
                    this.channel = data.channel;
                    this.videos = data.videos;
                    this.doneLoading = true;
                }
            )
        }
        else {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get('cid');
            if (id === '1') {
                this.service.getHintazakaVideos().subscribe(
                    (data: any) => {
                        this.channel = data.channel;
                        this.videos = data.videos;
                        this.doneLoading = true;
                    }
                )
            }
            else if (id === '2') {
                this.service.getKeyakizakaVideos().subscribe(
                    (data: any) => {
                        this.channel = data.channel;
                        this.videos = data.videos;
                        this.doneLoading = true;
                    }
                )
            }
            else if (id === '3') {

            }
        }
    }
    checkScreenWidth() {
        if (window.innerWidth >= 2030) {
            this.nzflex = '16.66%';
        }
        else if (window.innerWidth >= 1624 && window.innerWidth < 2030) {
            this.nzflex = '20%';
        }
        else if (window.innerWidth >= 1144 && window.innerWidth < 1624) {
            this.nzflex = '25%';
        }
        else if (window.innerWidth >= 888 && window.innerWidth < 1144) {
            this.nzflex = '33.33%';
        }
        else {
            this.nzflex = '50%';
        }
        this.miniMode = window.innerWidth <= 1300;
    }
    goToVideo(event) {
        window.location.href = 'https://ericyu049.github.io/sakamichitv/viewer.html?id=' + event.id;
    }
}