import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: Http) { }

  getAllCoupons() {
      return this.http.get('app/coupon/:couponID')
	.map(res => res.json());
  }
}
