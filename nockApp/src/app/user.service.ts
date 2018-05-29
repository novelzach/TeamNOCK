import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  getUser(index: string){
      return this.http.get('app/user/' + index)
        .map(res => res.json());
  }

  getAllUsers(){
      return this.http.get('app/users')
        .map(res => res.json());
  }
}
