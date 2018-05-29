import { TestBed, inject } from '@angular/core/testing';

import { CouponService } from './coupon.service';

describe('CouponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouponService]
    });
  });

  it('should be created', inject([CouponService], (service: CouponService) => {
    expect(service).toBeTruthy();
  }));
});
