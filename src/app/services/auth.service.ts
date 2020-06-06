import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient, 
  HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // api = "https://afternoon-fjord-78189.herokuapp.com/";
  api = "https://protected-fjord-91518.herokuapp.com/";
  // api = "https://f0d056104b17.ngrok.io/"
  token = undefined;

  constructor(private http: HttpClient) {

  }

  getHeaders() {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
      'Conten-Type': 'application/x-www-form-urlencoded'
    });
  }

  public get logIn() : boolean {
    if ( localStorage.getItem("access_token") !== null ) {
      var punto = new Date(localStorage.getItem("expires_in"));
      var actual = new Date();
      if ( actual < punto ) {
        return true;
      }
      return false;
    }
    return false;
  }

  postMe() {
    return this.http.post(this.api + "api/auth/me", {

    }, {
      headers: this.getHeaders()
    });
  }

  login(email: string, passsword: string) {
    this.http.post(this.api + "api/auth/login", {
      email: email,
      password: passsword
    }).subscribe((response: any) => {
      console.log(">", response);

      localStorage.setItem("access_token", 
        response.access_token);

      localStorage.setItem('token_type', 
        response.token_type);

      var tiempo = new Date(Date.now() + (response.expires_in * 1000));

      localStorage.setItem("expires_in", 
        tiempo.toString());

    }, (error: any) => {
      console.log("Error");
    });
  }

}
