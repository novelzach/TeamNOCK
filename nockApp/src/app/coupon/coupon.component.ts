import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  coupons: any = [];

  constructor(private couponService: CouponService) { }

  ngOnInit() {
      this.couponService.getAllCoupons().subscribe(coupons => {
	  this.coupons = coupons
      });
  }

}
