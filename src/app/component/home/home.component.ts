import { Component, HostListener, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { forkJoin } from "rxjs";
import { AppService } from "src/app/service/app.service";
import { selectSideNavState } from "src/app/store/app.selector";
import { AppState } from "src/app/store/app.state";

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    videos = [];
    nzflex;
    miniMode;
    constructor(private store: Store<AppState>, private service: AppService) {

    }

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.checkScreenWidth();
    }
    ngOnInit(): void {
        this.getVideos();
        this.checkScreenWidth()
        this.store.pipe(select(selectSideNavState)).subscribe(
            (data) => {
                this.miniMode = !data;
            }
        )
    }

    async getVideos() {
        forkJoin([this.service.getHintazakaVideos(), this.service.getSakurazakaVideos(), this.service.getNogizakaVideos()]).subscribe(results => {
            this.videos.push(results[0].videos, results[1].videos);
            this.videos = this.shuffleArray(this.videos.flat());
        });
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
    shuffleArray(array) {
        var currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
}