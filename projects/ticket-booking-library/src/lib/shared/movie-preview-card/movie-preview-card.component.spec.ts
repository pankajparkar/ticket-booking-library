import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePreviewCardComponent } from './movie-preview-card.component';

describe('MoviePreviewCardComponent', () => {
  let component: MoviePreviewCardComponent;
  let fixture: ComponentFixture<MoviePreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePreviewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviePreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
