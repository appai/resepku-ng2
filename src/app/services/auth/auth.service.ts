import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';


@Injectable()
export class AuthService {
  static authUserData$ = new Subject<any>();
  private authUser;
  private authenticatedUser = false;

  constructor(public af: AngularFire) {
  }

  signIn(provider: any): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login(provider)
    .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signOut(): void {
    console.log(this.authenticatedUser);
    this.af.auth.logout();
  }

  getCurrentUser() {
    let user = firebase.auth().currentUser;
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  checkAuth() {
    firebase.auth().onAuthStateChanged(function (user) {
      AuthService.authUserData$.next(user);
      if (user) {
        console.log('Signed in');
        return true;
      } else {
        console.log('No user auth');
        return false;
      }
    });
  }
}
