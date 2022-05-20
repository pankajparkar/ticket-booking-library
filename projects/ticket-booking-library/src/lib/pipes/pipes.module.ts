import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayPipe } from './day.pipe';
import { JoinPipe } from './join.pipe';
import { MinutePipe } from './minute.pipe';
import { SafePipe } from './safe.pipe';

const pipes = [
  DayPipe,
  JoinPipe,
  MinutePipe,
  SafePipe,
]

@NgModule({
  declarations: [
    ...pipes,
  ],
  exports: [
    ...pipes,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
