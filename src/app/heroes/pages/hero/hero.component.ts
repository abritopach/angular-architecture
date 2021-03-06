import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../../services/heroes/heroes.services';

import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.hero = this.heroesService.getHeroeById(parseInt(this.route.snapshot.paramMap.get('id'), 10));
    console.log(this.hero);
  }

  goBack() {
    console.log('HeroComponent::goBack() | method called');
    this.location.back();
  }

}
