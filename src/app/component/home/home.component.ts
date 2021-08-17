import { Component, HostListener, OnInit } from "@angular/core";
import { AppService } from "src/app/service/app.service";

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    videos;
    nzflex;
    miniMode;
    constructor(private service: AppService) {

    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.checkScreenWidth();
    }
    ngOnInit(): void {
        this.getVideos();
        this.checkScreenWidth()

    }
    
    getVideos() {
        this.service.getHintazakaVideos().subscribe(
            (data: any) => {
                console.log('Get hinatazaka videos: ', data);
                if (data.rspCde === 0) {
                    this.videos = data.videos;
                }
            }
        )
    }
    checkScreenWidth() {
        if (window.innerWidth >= 2304) {
            this.nzflex = '16.66%';
        }
        else if (window.innerWidth >= 1624 && window.innerWidth < 2300) {
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