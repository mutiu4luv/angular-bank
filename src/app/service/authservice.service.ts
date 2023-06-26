import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  private apiUrl = 'http://onlinetestapi.gerasim.in/api/';

  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'Ecomm/Login', data);
  }
}
