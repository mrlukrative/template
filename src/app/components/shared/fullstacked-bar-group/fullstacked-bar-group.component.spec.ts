import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackedBarGroupComponent } from './fullstacked-bar-group.component';

describe('FullstackedBarGroupComponent', () => {
  let component: FullstackedBarGroupComponent;
  let fixture: ComponentFixture<FullstackedBarGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullstackedBarGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullstackedBarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
