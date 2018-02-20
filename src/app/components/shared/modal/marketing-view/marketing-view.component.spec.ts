import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingViewComponent } from './marketing-view.component';

describe('MarketingViewComponent', () => {
  let component: MarketingViewComponent;
  let fixture: ComponentFixture<MarketingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
