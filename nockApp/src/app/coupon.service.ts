import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import modelCoupon from './share/modelCoupon';

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
}
