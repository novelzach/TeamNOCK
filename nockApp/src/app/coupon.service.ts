import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import modelCoupon from './share/modelCoupon';

export class Coupon {
    constructor(
	public couponID: Number,
	public product: String,
	public store: String,
	public exp_date: Date,
	public discount: Number,
	public is_percent: Boolean,
	public code: String,
	public image: String,
	public token_cost: Number,
	public userID: Number
	){}
}

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: Http) { }

  getCoupon(index: string) {
      return this.http.get('app/coupon/' + index)
	.map(res => res.json());
  }
  getAllCoupons(){
      return this.http.get('app/coupons/')
	.map(res => res.json());
  }
  postCoupon(newCoupon: modelCoupon): Observable<modelCoupon>{
      return this.http.post('app/coupons', newCoupon)
	.map(res => res.json());
  }
}
