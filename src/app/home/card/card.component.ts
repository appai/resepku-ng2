import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {
    items: FirebaseListObservable<any[]>;
    constructor(af: AngularFire) {
        this.items = af.database.list('/recipes');
    }

    ngOnInit() { }
}
