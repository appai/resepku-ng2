import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'featured',
    templateUrl: 'featured.component.html'
})

export class FeaturedComponent implements OnInit {
    featuredPostObject: FirebaseObjectObservable<any[]>;

    constructor(public af: AngularFire) {
        this.featuredPostObject = af.database.object('/pages');
    }

    ngOnInit() {
    }
}
