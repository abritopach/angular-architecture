import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MyCustomMaterialModule } from '../../../ui/material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MyCustomMaterialModule,
    FlexLayoutModule
  ],
  declarations: [LoginComponent],
  entryComponents: []
})
export class LoginPageModule {}
