import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLocationsCardComponent } from './all-locations-card.component';

describe('AllLocationsCardComponent', () => {
  let component: AllLocationsCardComponent;
  let fixture: ComponentFixture<AllLocationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLocationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLocationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
