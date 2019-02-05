import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

import { HeroesListComponent } from '../../../components/heroes-list/heroes-list.component';

@NgModule({
  imports: [
CommonModule,
  RouterModule.forChild([
    {
      path: '',
      component: HeroesComponent
    }
  ]),
  ],
  declarations: [HeroesComponent, HeroesListComponent],
  entryComponents: [HeroesListComponent]
})
export class HeroesPageModule {}
