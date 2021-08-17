import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ActionTypes } from "src/app/store/app.action";
import { selectSideNavState } from "src/app/store/app.selector";
import { AppState } from "src/app/store/app.state";

@Component({
    selector: 'topnav-comp',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopNavComponent implements OnInit{
    sideNavState = true;
    constructor(private store: Store<AppState>) {

    }
    ngOnInit(): void {
        this.store.pipe(select(selectSideNavState)).subscribe(
            (data) => {
                this.sideNavState = data;
            }
        )
    }
    goHome() {
        if (window.location.hostname === 'localhost') {
            window.location.href = '/';
        }
        else if (window.location.hostname === 'ericyu049.github.io') {
            window.location.href = 'https://ericyu049.github.io/sakamichitv/';
        }
    }
    switchNavState() {
        this.store.dispatch(ActionTypes.switchSideNav({state: !this.sideNavState}));
    }
}