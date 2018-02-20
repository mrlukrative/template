import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxFullstackedBarComponent } from './dx-fullstacked-bar.component';

describe('DxFullstackedBarComponent', () => {
  let component: DxFullstackedBarComponent;
  let fixture: ComponentFixture<DxFullstackedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxFullstackedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxFullstackedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
