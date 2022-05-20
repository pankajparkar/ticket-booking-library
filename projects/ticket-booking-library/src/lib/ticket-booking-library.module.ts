import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class TicketBookingLibraryModule {
}
