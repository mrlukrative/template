import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuesSourceComponent } from './revenues-source.component';

describe('RevenuesSourceComponent', () => {
  let component: RevenuesSourceComponent;
  let fixture: ComponentFixture<RevenuesSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuesSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuesSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
