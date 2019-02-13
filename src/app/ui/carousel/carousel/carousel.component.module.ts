import { NgModule } from '@angular/core';

import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  imports: [SlideshowModule],
  exports: [SlideshowModule]
})
export class CarouselModule {}
