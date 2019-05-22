import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login() {
    this.http.get('http://localhost:8080/login/facebook')
      .subscribe(
        (response) => {
            console.log(response);
        }
      );
  }


}
