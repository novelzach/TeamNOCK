import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import modelUser from '../share/modelUser';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId: string;
  user: modelUser;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService) { 
      this.userId = this.route.snapshot.params['id'];
      this.userService.getUser(this.userId).subscribe(result => {
	  this.user = result;
      });
    }

  ngOnInit() {
      //retrieve posts from this API
    /*  this.userService.getAllUsers().subscribe(users => {
	  this.users = users;
      });*/
  }

}
