import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizesComponent } from './viewquizes.component';

describe('ViewquizesComponent', () => {
  let component: ViewquizesComponent;
  let fixture: ComponentFixture<ViewquizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
