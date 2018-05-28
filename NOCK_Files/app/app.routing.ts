import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TraderComponent } from './trader/trader.component';
import { CouponComponent } from './coupon/coupon.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'coupon', component: CouponComponent },
    { path: 'coupon/:id', component: CouponComponent}
    { path: 'trader', component: TraderComponent },
    { path: 'trader/:id', component: TraderComponent}
    
];

export const routing = RouterModule.forRoot(routes);