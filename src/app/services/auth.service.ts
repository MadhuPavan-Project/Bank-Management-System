import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './user';
import {Router} from '@angular/router';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }



  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    console.log(localStorage.getItem('ACCESS_TOKEN'));
    localStorage.removeItem('ACCESS_TOKEN');
  }
}

