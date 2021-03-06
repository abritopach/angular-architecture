import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

import { HeroesListComponent } from '../../components/heroes-list/heroes-list.component';
import { MyCustomMaterialModule } from '../../../ui/material/material.module';
import { CarouselComponent } from '../../../ui/carousel/carousel/carousel.component';
import { CarouselModule } from '../../../ui/carousel/carousel/carousel.component.module';

import { SharedComponentsModule } from '../../../common/shared-components.module';

import { FlexLayoutModule } from '@angular/flex-layout';


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
    CarouselModule,
    FlexLayoutModule
  ],
  declarations: [HeroesComponent, HeroesListComponent, CarouselComponent],
  entryComponents: [HeroesListComponent, CarouselComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroesPageModule {}
