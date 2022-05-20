import { DatabaseService } from '../../services/database.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'bmc-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.sass']
})
export class MovieSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  movies$ = this.searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => this.db.searchMovies(term))
  );

  constructor(
    private db: DatabaseService,
  ) { }

  ngOnInit() {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
