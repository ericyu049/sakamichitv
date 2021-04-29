import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
    selector: 'top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
    isCollapsed: boolean;
    searchBarVisible: boolean = false;
    input;
    constructor() {

    }
}
