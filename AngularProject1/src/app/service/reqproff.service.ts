import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqproffService {

  constructor(private http: HttpClient) { }

  getProff() {
    return this.http.get("https://www.serverlezioni.cloud:3000/proff", { observe: 'body'})
  }

}
