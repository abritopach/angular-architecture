import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroComponent } from './hero.component';

import { HeroDetailsComponent } from '../../components/hero-details/hero-details.component';
import { MyCustomMaterialModule } from 'src/ui/material/material.module';


@NgModule({
  imports: [
  CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroComponent
      }
    ]),
    MyCustomMaterialModule
  ],
  declarations: [HeroComponent, HeroDetailsComponent],
  entryComponents: [HeroDetailsComponent]
})
export class HeroPageModule {}
