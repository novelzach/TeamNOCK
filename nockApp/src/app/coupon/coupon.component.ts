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
  coupon: modelCoupon;
  product: String;
  store: String;
  exp_date: Date;
  discount: Number;
  token_cost: Number;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private couponService: CouponService
    ) { 
       this.couponId = this.route.snapshot.params['id'];
          this.couponService.getCoupon(this.couponId).subscribe(result => {
	  this.coupon = result;
    });

      }

  ngOnInit() {

/*
    this.couponId = this.route.snapshot.params['id'];
    this.couponService.getCoupon(this.couponId).subscribe(result => {
	this.coupon = result;
    });
*/

  }

}
