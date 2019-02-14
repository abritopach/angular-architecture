import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MyCustomMaterialModule } from '../ui/material/material.module';
import { MyFlexLayoutModule } from '../ui/flex-layout/flex-layout.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
CommonModule,
    MyCustomMaterialModule,
    MyFlexLayoutModule
  ],
  exports: [HeaderComponent]
})
export class SharedComponentsModule { }
