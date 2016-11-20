import { OnInit, ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from './../../services/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    authStatus: any;

    constructor(
        public af: AngularFire,
        public authService: AuthService) {
    }

    ngOnInit() {
      AuthService.authUserData$.subscribe(status => {
        this.authStatus = status || 'Null';
        debugger;
      });
    }

    login() {
        this.authService.signInWithGoogle();
    }

    logout() {
        this.authService.signOut();
    }

    checkAuthStatus() {
        let authData = this.authService.getCurrentUser();
        debugger;
    }

}
