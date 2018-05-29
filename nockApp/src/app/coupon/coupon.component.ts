import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Coupon, CouponService } from '../coupon.service';
import modelCoupon from '../share/modelCoupon';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  couponId: string;
  coupon: Coupon;
  store: String;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private couponService: CouponService
    ) {

    /*  
      this.couponId = route.snapshot.params['couponId'];
      couponService.getCoupon('1')
	.subscribe(
	    result => {
		this.coupon = result;
	    },
	    () => {},
	    () => {}
	);
	this.store = this.coupon.store;
  */  
      }

  ngOnInit() {
/*      this.coupon = this.route.paramMap.pipe(
	switchMap((params: ParamMap) => {
	    this.couponId = params.get('couponId');
	    return this.couponService.getCoupon(this.couponId);
	})
    );*/ 
/*    this.route.paramMap.subscribe(params => {
	this.couponId = params['couponId']
    });*/

    this.couponService.getCoupon(this.couponId).subscribe(result => {
	this.coupon = result;
    });
    this.store = this.coupon.store;
    
  }

}
