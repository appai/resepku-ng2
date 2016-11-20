import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthService } from './../../services/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    private authUser;

    constructor(
        public af: AngularFire,
        private auth: AuthService
    ) {
    }


    ngOnInit() {
    }

    login() {
        this.auth.signInWithGoogle();
    }
    logout() {
        this.auth.signOut();
    }
}
