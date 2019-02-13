import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MyCustomMaterialModule } from '../ui/material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
  CommonModule,
    MyCustomMaterialModule
  ],
  exports: [HeaderComponent]
})
export class SharedComponentsModule { }
