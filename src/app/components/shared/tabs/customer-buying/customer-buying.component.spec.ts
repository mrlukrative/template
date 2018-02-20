import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBuyingComponent } from './customer-buying.component';

describe('CustomerBuyingComponent', () => {
  let component: CustomerBuyingComponent;
  let fixture: ComponentFixture<CustomerBuyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBuyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
