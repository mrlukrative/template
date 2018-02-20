import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AquisitionRententionComponent} from './aquisition-rentention.component';

describe('AquisitionRententionComponent', () => {
  let component: AquisitionRententionComponent;
  let fixture: ComponentFixture<AquisitionRententionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AquisitionRententionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquisitionRententionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
