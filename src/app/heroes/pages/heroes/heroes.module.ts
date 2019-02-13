import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

import { HeroesListComponent } from '../../components/heroes-list/heroes-list.component';
import { MyCustomMaterialModule } from '../../../ui/material/material.module';
import { CarouselComponent } from '../../../ui/carousel/carousel/carousel.component';
import { CarouselModule } from '../../../ui/carousel/carousel/carousel.component.module';

import { SharedComponentsModule } from '../../../common/shared-components.module';


@NgModule({
  imports: [
CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroesComponent
      }
    ]),
    MyCustomMaterialModule,
    SharedComponentsModule,
    CarouselModule
  ],
  declarations: [HeroesComponent, HeroesListComponent, CarouselComponent],
  entryComponents: [HeroesListComponent, CarouselComponent]
})
export class HeroesPageModule {}
