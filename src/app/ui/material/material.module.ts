import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule,
         MatButtonModule, MatIconModule } from '@angular/material';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule, MatButtonModule,
            MatIconModule, ScrollingModule],
  exports: [MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule, MatButtonModule,
            MatIconModule, ScrollingModule]
})
export class MyCustomMaterialModule {}
