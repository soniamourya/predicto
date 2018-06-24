import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSummaryCardComponent } from './health-summary-card.component';

describe('HealthSummaryCardComponent', () => {
  let component: HealthSummaryCardComponent;
  let fixture: ComponentFixture<HealthSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
