import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalDevicesCardComponent } from './critical-devices-card.component';

describe('CriticalDevicesCardComponent', () => {
  let component: CriticalDevicesCardComponent;
  let fixture: ComponentFixture<CriticalDevicesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalDevicesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalDevicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
