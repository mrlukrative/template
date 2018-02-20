import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSpendComponent } from './customers-spend.component';

describe('CustomersSpendComponent', () => {
  let component: CustomersSpendComponent;
  let fixture: ComponentFixture<CustomersSpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersSpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
