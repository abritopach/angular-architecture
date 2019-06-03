import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imageUrlArray = [];
  @Input()
  heroes: any[] = [];

  @ViewChild('slideshow', { read: ElementRef, static: true }) slideshow: any;

  constructor() { }

  ngOnInit() {
    console.log('CarouselComponent::ngOnInit() | method called', this.heroes);
    this.heroes.map(hero => this.imageUrlArray.push(hero.images.lg));
  }

  onSlideLeft() {
    // console.log('CarouselComponent::onSlideLeft() | method called');
    // console.log(this.slideshow.slideIndex);
  }

  onSlideRight() {
    // console.log('CarouselComponent::onSlideRight() | method called');
    // console.log(this.slideshow.slideIndex);
  }

}
