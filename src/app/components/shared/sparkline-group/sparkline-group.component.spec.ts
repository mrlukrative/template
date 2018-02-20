import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SparklineGroupComponent} from './sparkline-group.component';

describe('SparklineGroupComponent', () => {
  let component: SparklineGroupComponent;
  let fixture: ComponentFixture<SparklineGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparklineGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklineGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
