import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './layout.component';


import { layoutRoutes } from './layout.routes';
import { LoginComponent } from './login/login.component';
import { HoverFocusDirective } from '../directives/hoverfocus.directive';
import { ViewsFormComponent } from './form/form.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    ViewsFormComponent,
    HoverFocusDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(layoutRoutes),
  ],
})
export class LayoutModule {
}
