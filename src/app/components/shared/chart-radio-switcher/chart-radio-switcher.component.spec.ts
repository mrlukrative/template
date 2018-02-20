import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRadioSwitcherComponent } from './chart-radio-switcher.component';

describe('ChartRadioSwitcherComponent', () => {
  let component: ChartRadioSwitcherComponent;
  let fixture: ComponentFixture<ChartRadioSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRadioSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRadioSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
