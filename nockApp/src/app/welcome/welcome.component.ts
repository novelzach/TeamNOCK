import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  coupons: any = [];

  constructor(private couponService: CouponService) { }

  ngOnInit() {
      this.couponService.getAllCoupons().subscribe(coupons => {
	  this.coupons = coupons;
      });
  }

}
