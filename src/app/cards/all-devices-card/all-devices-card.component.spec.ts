import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDevicesCardComponent } from './all-devices-card.component';

describe('AllDevicesCardComponent', () => {
  let component: AllDevicesCardComponent;
  let fixture: ComponentFixture<AllDevicesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDevicesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDevicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
