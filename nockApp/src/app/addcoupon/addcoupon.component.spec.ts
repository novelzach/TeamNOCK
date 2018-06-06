import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcouponComponent } from './addcoupon.component';

describe('AddcouponComponent', () => {
  let component: AddcouponComponent;
  let fixture: ComponentFixture<AddcouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
