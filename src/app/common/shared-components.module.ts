import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyCustomMaterialModule } from '../ui/material/material.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MyCustomMaterialModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedComponentsModule { }
