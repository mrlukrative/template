import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DxSideBySideChartComponent} from './dx-side-by-side-bar-chart.component';

describe('DxSideBySideChartComponent', () => {
  let component: DxSideBySideChartComponent;
  let fixture: ComponentFixture<DxSideBySideChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DxSideBySideChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxSideBySideChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
