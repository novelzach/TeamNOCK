import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
      //retrieve posts from this API
      this.userService.getAllUsers().subscribe(users => {
	  this.users = users;
      });
  }

}
