import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    getHintazakaVideos() {
        const url = '/assets/hinatazaka.json';
        return this.http.get(url, { responseType: 'json', reportProgress: true });
    }
    getTestVideo() {
        const url = '/assets/video.json';
        return this.http.get(url, { responseType: 'json', reportProgress: true });
    }
}