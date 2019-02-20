import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/pages/login/login.module#LoginPageModule' },
  { path: 'heroes', canActivate: [AuthGuard], loadChildren: './heroes/pages/heroes/heroes.module#HeroesPageModule' },
  { path: 'hero/:id', canActivate: [AuthGuard], loadChildren: './heroes/pages/hero/hero.module#HeroPageModule' }
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
