import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login/login.component';

export const ROUTE_TEST = 'test';

export const layoutRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, }
    ]
  },
];
