import { TestBed, inject } from '@angular/core/testing';

import { AddcouponService } from './addcoupon.service';

describe('AddcouponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddcouponService]
    });
  });

  it('should be created', inject([AddcouponService], (service: AddcouponService) => {
    expect(service).toBeTruthy();
  }));
});
