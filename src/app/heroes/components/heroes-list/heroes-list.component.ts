import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  @Input()
  heroes: any[] = [];

  constructor() { }

  ngOnInit() {
    console.log('HeroesListComponent::ngOnInit() | method called', this.heroes);
  }

}
