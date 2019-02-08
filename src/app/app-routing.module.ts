import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'heroes', loadChildren: './heroes/pages/heroes/heroes.module#HeroesPageModule' },
  { path: 'hero/:id', loadChildren: './heroes/pages/hero/hero.module#HeroPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- Debugging purposes only.
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
