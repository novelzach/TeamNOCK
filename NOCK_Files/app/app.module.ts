import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CouponComponent } from './coupon/coupon.component';
import { TraderComponent } from './trader/trader.component';
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { AddCouponComponent } from './trader/addcoupon/addcoupon.component';
import { UpdateCouponComponent } from './trader/updatecoupon/updatecoupon.component';
import { DeleteCouponComponent } from './trader/deletecoupon/deletecoupon.component';

@NgModule({
  declarations: [
    AppComponent,
    CouponComponent,
    TraderComponent,
    HomeComponent,
    AddCouponComponent,
    UpdateCouponComponent,
    DeleteCouponComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: ,
  bootstrap: [AppComponent]
})
export class AppModule { }