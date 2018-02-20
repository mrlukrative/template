import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxSparklineComponent } from './dx-sparkline.component';

describe('DxSparklineComponent', () => {
  let component: DxSparklineComponent;
  let fixture: ComponentFixture<DxSparklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxSparklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxSparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
