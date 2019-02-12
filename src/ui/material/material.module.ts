import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule,
         MatButtonModule, MatIconModule, MatIcon } from '@angular/material';

@NgModule({
  imports: [MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule, MatButtonModule,
            MatIconModule],
  exports: [MatListModule, MatLineModule, MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatCardModule, MatButtonModule,
            MatIconModule]
})
export class MyCustomMaterialModule {}
