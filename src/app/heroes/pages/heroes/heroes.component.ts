import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../../services/heroes/heroes.services';
import { SideNavService } from '../../../services/side-nav/side-nav.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  showCarousel = false;

  constructor(private heroesService: HeroesService, private sideNavService: SideNavService) { }

  // https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40

  ngOnInit() {
    this.heroes = this.heroesService.getAllHeroes();
    // console.log(this.heroes);
  }

  openSideNav() {
    this.sideNavService.openNav();
  }

}
