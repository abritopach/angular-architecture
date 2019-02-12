import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

import { HeroesListComponent } from '../../components/heroes-list/heroes-list.component';
import { MyCustomMaterialModule } from 'src/ui/material/material.module';

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
    SharedComponentsModule
  ],
  declarations: [HeroesComponent, HeroesListComponent],
  entryComponents: [HeroesListComponent]
})
export class HeroesPageModule {}
