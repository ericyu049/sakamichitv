import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    HOSTNAME_URL = 'https://www.googleapis.com/youtube/v3';
    prefix_path = '/sakamichitv';
    constructor(private http: HttpClient) {
        console.log(window.location.hostname);
        if (window.location.hostname === 'localhost') {
            this.prefix_path = '';
        }
    }
    searchVideos(query) {
        const url = this.HOSTNAME_URL + "/search";
        // return this.http.get(url, { params: query, reportProgress: true, responseType: "json" });
        return this.http.get(this.prefix_path + '/assets/nogi-main.json', { params: query, reportProgress: true, responseType: "json" });
    }
    getVideoStats(query) {
        const url = this.HOSTNAME_URL + "/videos";
        // return this.http.get(url, { params: query, reportProgress: true, responseType: "json" });
        return this.http.get(this.prefix_path + '/assets/stats.json', { params: query, reportProgress: true, responseType: "json" });

    }
    getChannelDetail(id) {
        const url = this.HOSTNAME_URL + "/channels";
        const query = {
            key: '',
            part: 'statistics, snippet',
            id: id
        }
        // return this.http.get(url, { params: query, reportProgress: true, responseType: "json" });
        return this.http.get(this.prefix_path + '/assets/channel.json', { params: query, reportProgress: true, responseType: "json" });
    }
}