import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    getHintazakaVideos(): Observable<any> {
        const url = '/sakamichitv/assets/hinatazaka.json';
        return this.http.get(url, { responseType: 'json', reportProgress: true });
    }
    getSakurazakaVideos(): Observable<any> {
        const url = '/sakamichitv/assets/sakurazaka.json';
        return this.http.get(url, { responseType: 'json', reportProgress: true });
    }
    getNogizakaVideos(): Observable<any> {
        const url = '/sakamichitv/assets/nogizaka.json';
        return this.http.get(url, { responseType: 'json', reportProgress: true });
    }
    getTestVideo() {
        const url = '/sakamichitv/assets/video.json';
        return this.http.get(url, { responseType: 'json', reportProgress: true });
    }
}