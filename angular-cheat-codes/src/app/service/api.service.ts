import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUserDetail() {
    return this.httpClient.get('https://localhost:5001/GetUserDetail');
  }

  getUserProfile() {
    return this.httpClient.get('https://localhost:5001/GetUserProfile');
  }
}
