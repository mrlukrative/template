import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxChartsComponent } from './dx-charts.component';

describe('DxChartsComponent', () => {
  let component: DxChartsComponent;
  let fixture: ComponentFixture<DxChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
