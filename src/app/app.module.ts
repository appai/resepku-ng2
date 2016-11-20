import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { About } from './about';
import { NoContent } from './no-content';

// Common component
import * as common from './common';

// Home component
import * as home from './home';

// Page component
import * as page from './page';

// Form component
import * as formComponent from './form';

// Firebase
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyAycY9n4FDQpVsNRhRFebTG5FXDyicc0Tg',
  authDomain: 'appai-resepku-ng2.firebaseapp.com',
  databaseURL: 'https://appai-resepku-ng2.firebaseio.com',
  storageBucket: 'appai-resepku-ng2.appspot.com'
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

// Services

import * as services from './services';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    About,
    NoContent,
    // Common component
    common.HeaderComponent,
    common.FooterComponent,
    common.MessageComponent,
    common.SidebarComponent,
    common.CommentComponent,
    // Form
    formComponent.LoginComponent,
    formComponent.RegisterComponent,
    formComponent.PostComponent,
    // Home component
    home.HomeComponent,
    home.TipsComponent,
    home.FeaturedComponent,
    home.CardComponent,
    // Page component
    page.PageComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    FIREBASE_PROVIDERS,
    services.AuthService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    const state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
