import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:8081/home";

  
  constructor(private http:HttpClient) { }

  getCurrentUser(){
  
    return this.http.get<string>(`${this.baseUrl}/current-user`);
  }


getUser(){
  
  return this.http.get(`${this.baseUrl}/users`);
}


getData(){
  
  return this.http.get(`${this.baseUrl}/data`);
}



}
