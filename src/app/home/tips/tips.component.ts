import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'tips',
    templateUrl: 'tips.component.html'
})
export class TipsComponent implements OnInit {
    tipsPostObject: FirebaseObjectObservable<any[]>;

    constructor(public af: AngularFire) {
        this.tipsPostObject = af.database.object('/pages');
    }

    ngOnInit() { }
}