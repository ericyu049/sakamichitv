import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    searchVideos(query) {
        console.log('hiiii');
        const url = "/search";
        // return this.http.get(url, { params: query, reportProgress: true, responseType: "json" });
        return this.http.get('/sakamichitv/assets/nogi-main.json',  { params: query, reportProgress: true, responseType: "json" });
    }
    getVideoStats(query) {
        const url = "/videos";
        // return this.http.get(url, { params: query, reportProgress: true, responseType: "json" });
        return this.http.get('/sakamichitv/assets/stats.json',  { params: query, reportProgress: true, responseType: "json" });

    }
    getChannelDetail(id) {
        const url = "/channels";
        const query = {
            key: 'AIzaSyAzdHWiPLODTady7NNa4zben6MOXoRpwd4',
            part: 'statistics, snippet',
            id: id
        }
        return this.http.get('/sakamichitv/assets/channel.json',  { params: query, reportProgress: true, responseType: "json" });
    }
}