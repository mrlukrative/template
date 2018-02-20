import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxLineChartComponent } from './dx-line-chart.component';

describe('DxLineChartComponent', () => {
  let component: DxLineChartComponent;
  let fixture: ComponentFixture<DxLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
