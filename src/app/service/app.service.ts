import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    HOSTNAME_URL = 'https://www.googleapis.com/youtube/v3';
    constructor(private http: HttpClient) {

    }
    searchVideos(query) {
        const url = this.HOSTNAME_URL +  "/search";
        return this.http.get(url, { params: query, reportProgress: true, responseType: "json" });
        // return this.http.get('/sakamichitv/assets/nogi-main.json',  { params: query, reportProgress: true, responseType: "json" });
    }
    getVideoStats(query) {
        const url = this.HOSTNAME_URL + "/videos";
        return this.http.get(url, { params: query, reportProgress: true, responseType: "json" });
        // return this.http.get('/sakamichitv/assets/stats.json',  { params: query, reportProgress: true, responseType: "json" });

    }
    getChannelDetail(id) {
        const url = this.HOSTNAME_URL + "/channels";
        const query = {
            key: 'AIzaSyAzdHWiPLODTady7NNa4zben6MOXoRpwd4',
            part: 'statistics, snippet',
            id: id
        }
        return this.http.get(url, { params: query, reportProgress: true, responseType: "json" });
        // return this.http.get('/sakamichitv/assets/channel.json',  { params: query, reportProgress: true, responseType: "json" });
    }
}