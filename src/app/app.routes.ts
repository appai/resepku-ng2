import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { PageComponent } from './page';
import * as formPage from './form';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'page', component: PageComponent },
  { path: 'login', component: formPage.LoginComponent },
  { path: 'register', component: formPage.RegisterComponent },
  { path: 'post', component: formPage.PostComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
