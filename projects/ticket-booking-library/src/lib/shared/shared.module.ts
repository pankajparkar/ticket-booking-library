import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { MovieDetailComponent } from '../shared/movie-detail/movie-detail.component';
import { MovieDetailsCardComponent } from '../shared/movie-details-card/movie-details-card.component';
import { GoldenTextComponent } from '../shared/golden-text/golden-text.component';
import { MoviePreviewCardComponent } from '../shared/movie-preview-card/movie-preview-card.component';
import { MovieSearchComponent } from '../shared/movie-search/movie-search.component';
import { MoviesGridComponent } from '../shared/movies-grid/movies-grid.component';
import { ShowtimesComponent } from '../shared/showtimes/showtimes.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PipesModule } from '../pipes/pipes.module';

const sharedComponents = [
  MovieDetailComponent,
  MovieDetailsCardComponent,
  GoldenTextComponent,
  MoviePreviewCardComponent,
  MovieSearchComponent,
  MoviesGridComponent,
  ShowtimesComponent,
  NavbarComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...sharedComponents,
  ],
  exports: [
    ...sharedComponents,
  ],
  imports: [
    CommonModule,
    ModalModule.forChild(),
    RouterModule,
    PipesModule,
  ],
})
export class SharedModule { }
