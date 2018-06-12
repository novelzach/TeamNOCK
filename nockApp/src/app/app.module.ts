import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { CouponComponent } from './coupon/coupon.component';
import { CouponService } from './coupon.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddCouponComponent } from './addcoupon/addcoupon.component';

const ROUTES = [
  {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
  },

  {
      path: 'user/:id',
      component: UserComponent
  },
  {
      path: 'welcome',
      component: WelcomeComponent
  },
  {
      path: 'coupon/:id',
      component: CouponComponent
  },
  {
      path: 'addcoupon',
      component: AddCouponComponent
  },
  {
      path: '**',
      redirectTo: 'welcome'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CouponComponent,
    WelcomeComponent,
    AddCouponComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserService, CouponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
