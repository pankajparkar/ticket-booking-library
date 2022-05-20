import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenTextComponent } from './golden-text.component';

describe('GoldenTextComponent', () => {
  let component: GoldenTextComponent;
  let fixture: ComponentFixture<GoldenTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
