import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalLocationsCardComponent } from './critical-locations-card.component';

describe('CriticalLocationsCardComponent', () => {
  let component: CriticalLocationsCardComponent;
  let fixture: ComponentFixture<CriticalLocationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalLocationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalLocationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
