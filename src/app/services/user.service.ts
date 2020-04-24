import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:5000/api/users/";

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(this.url.concat('register'), user);
  }

  login(user: any): Observable<any> {
    return this.http.post(this.url.concat('login'), user);
  }
}
