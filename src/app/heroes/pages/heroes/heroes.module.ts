import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

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
  declarations: [HeroesComponent]
})
export class HeroesPageModule {}
