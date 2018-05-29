import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';

const ROUTES = [
  {
      path: '',
      redirectTo: 'user',
      pathMatch: 'full'
  },
  {
      path: 'user',
      component: UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
