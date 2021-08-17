import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/service/app.service";
import { formatDistance } from 'date-fns';
@Component({
    selector: 'viewer-comp',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
    video;
    videos;
    doneLoading: boolean = false;
    data: any[] = [];
    submitting = false;
    inputValue = '';
    user = {
        author: 'こさかなしか勝たん',
        avatar: '/assets/kosakana.jpg'
      };
    constructor(private service: AppService) {

    }
    ngOnInit() {
        this.service.getTestVideo().subscribe(
            (data: any) => {
                console.log(data);
                this.video = data.video;
                this.doneLoading = true;
            }
        );
        this.service.getHintazakaVideos().subscribe(
            (data: any) => {
                this.videos = data.videos;
            }
        )
    }
    handleSubmit(): void {
        this.submitting = true;
        const content = this.inputValue;
        this.inputValue = '';
        setTimeout(() => {
            this.submitting = false;
            this.data = [
                ...this.data,
                {
                    ...this.user,
                    content,
                    datetime: new Date(),
                    displayTime: formatDistance(new Date(), new Date())
                }
            ].map(e => ({
                ...e,
                displayTime: formatDistance(new Date(), e.datetime)
            }));
        }, 800);
    }
}