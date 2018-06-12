import { Injectable } from '@angular/core';
import { Coupon } from './coupon.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import modelCoupon from './share/modelCoupon';

@Injectable({
  providedIn: 'root'
})
export class AddcouponService {

  constructor() { }

  formToJSON(elements) {
    return [].reduce.call(elements, function (data, element) {
      if (element.name && element.value) {      
        data[element.name] = element.value;
      }
      return this.http.post('app/coupons/' + data)
    }, {})
  }

}
