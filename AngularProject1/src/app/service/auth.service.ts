import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(body: {}) {
    const headers = { 'Access-Control-Allow-Origin': '*' }
    return this.http.post("https://www.serverlezioni.cloud:3000/signup", body, { headers })
  }
  googlepass(body: any, mail: string) {
    body.mail = mail
    const headers = { 'Access-Control-Allow-Origin': '*'}

    return this.http.post("https://www.serverlezioni.cloud:3000/googlepass", body, { headers })
  }
}
