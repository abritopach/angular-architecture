import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatListModule, MatLineModule } from '@angular/material';

@NgModule({
  imports: [MatListModule, MatLineModule],
  exports: [MatListModule, MatLineModule]
})
export class MyCustomMaterialModule {}
