import { Component, OnInit } from '@angular/core';

import { HeroComponent } from './../common/hero';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
}
