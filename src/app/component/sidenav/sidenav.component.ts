import { Component, HostListener, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { selectSideNavState } from "src/app/store/app.selector";
import { AppState } from "src/app/store/app.state";

@Component({
    selector: 'sidenav-comp',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {
    @Input() enableMiniMode: boolean;
    showSideNav: boolean = true;
    id;
    constructor(private store: Store<AppState>) {
    }
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.checkScreenWidth()
    }
    ngOnInit(): void {
        this.checkScreenWidth();
        this.store.pipe(select(selectSideNavState)).subscribe(
            (data) => {
                this.showSideNav = data;
            }
        );
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.id = urlParams.get('cid');
    }
    checkScreenWidth() {
        if (window.innerWidth <= 1300) {
            this.showSideNav = false;
        }
        else {
            if (!window.location.pathname.includes("viewer.html"))
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