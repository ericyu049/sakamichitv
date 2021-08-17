import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'topnav-comp',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopNavComponent implements OnInit{
    constructor() {

    }
    ngOnInit(): void {
    }
    goHome() {
        if (window.location.hostname === 'localhost') {
            window.location.href = '/';
        }
        else if (window.location.hostname === 'https://ericyu049.github.io') {
            window.location.href = 'https://ericyu049.github.io/sakamichitv/';
        }
    }
}