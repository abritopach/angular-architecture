import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../../services/heroes/heroes.services';
import { SideNavService } from '../../../services/side-nav/side-nav.service';
import { CardItem } from 'st-three-dimensional-card-carousel/dist/types/models/cardItem.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  showCarousel = false;
  slides: CardItem[] = [];
  autoloop = {
    enabled: false,
    seconds: 2000
  };
  slidesColors = ['#1abc9c', '#e67e22', '#e74c3c', '#2c3e50', '#2980b9', '#9b59b6'];

  constructor(private heroesService: HeroesService, private sideNavService: SideNavService) { }

  // https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40

  ngOnInit() {
    this.heroes = this.heroesService.getAllHeroes();
    this.builtCarouselSlides();
  }

  openSideNav() {
    this.sideNavService.openNav();
  }

  builtCarouselSlides() {
    console.log('HeroesComponent::builtCarouselSlides() | method called');
    this.heroes.map((hero, index) => {
      const cardItem: CardItem = {
        id: index,
        title: hero.name,
        imgUrl: hero.images.lg,
        color: this.slidesColors[index],
        currentPlacement: 0,
        subtitle: {
          text: hero.biography.fullName,
          icon: 'fa fa-info-circle'
        },
      };
      this.slides.push(cardItem);
    });
    console.log('slides', this.slides);
  }

}
