import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { CouponComponent } from './coupon/coupon.component';
import { CouponService } from './coupon.service';

const ROUTES = [
  {
      path: '',
      redirectTo: 'user',
      pathMatch: 'full'
  },
  {
      path: 'user',
      component: UserComponent
  },
  {
      path: 'coupon/:couponID',
      component: CouponComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CouponComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserService, CouponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
