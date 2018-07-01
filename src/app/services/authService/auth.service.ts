import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  currentUser: any;

  constructor(private http: Http) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {
   return this.http.post('/api/authenticate', JSON.stringify(credentials))
    .map(response => {
      console.log("response of login :" , response.json());
      let result = response.json();

      if (result && result.token) {
        localStorage.setItem('token', result.token);

        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true;
      }
      else return false;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() {

    return tokenNotExpired();
   /*
   //tokenNotExpired function implementation

   let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');

    if(!token)
      return false;
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    console.log("Expiration :" , expirationDate);
    //console.log("isExpired :" ,isExpired);

    return !isExpired;*/
  }
  get currentuser(){
    let token = localStorage.getItem('token');
    if(!token)
      return null;

    return new JwtHelper().decodeToken(token);
  }
}


