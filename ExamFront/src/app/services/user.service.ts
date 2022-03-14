import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`,user);
  }

  public updateUser(user:any){
    console.log(user);
    return this.http.put(`${baseUrl}/user/update`,user)
  }

}
