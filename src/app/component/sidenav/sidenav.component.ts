import { Component, HostListener, OnInit } from "@angular/core";

@Component({
    selector: 'sidenav-comp',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {
    showSideNav: boolean = true;
    constructor() {

    }
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.checkScreenWidth()
    }
    ngOnInit(): void {
        this.checkScreenWidth()
    }
    checkScreenWidth() {
        if (window.innerWidth <= 1300) {
            this.showSideNav = false;
        }
        else {
            this.showSideNav = true;
        };
    }
    goHome() {
        if (window.location.hostname === 'localhost') {
            window.location.href = '/';
        }
        else if (window.location.hostname === 'ericyu049.github.io') {
            window.location.href = 'https://ericyu049.github.io/sakamichitv/';
        }
    }
}