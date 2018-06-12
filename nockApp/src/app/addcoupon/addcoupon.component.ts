import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CouponService } from '../coupon.service';
import modelCoupon from '../share/modelCoupon';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-addcoupon',
  templateUrl: './addcoupon.component.html',
  styleUrls: ['./addcoupon.component.css']
})
export class AddCouponComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private couponService: CouponService
    ) { }

  ngOnInit() {
  }
  public postCoupon(inProduct: string, inStore: string, inExp: Date, 
    inDiscount: number, inCode: string)
  {
      let newCoupon: modelCoupon = {
	  couponID: 100,
	  product: inProduct,
	  store: inStore,
	  exp_date: inExp,
	  discount: inDiscount,
	  is_percent: false,
	  code: inCode,
	  image: null,
	  token_cost: 5,
	  userID: 2
      };

      this.couponService.postCoupon(newCoupon).subscribe(); 
  };

}
