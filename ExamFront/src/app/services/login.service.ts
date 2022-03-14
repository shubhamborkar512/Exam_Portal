import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStatusSubject=new Subject<boolean>();
  
  constructor(private http:HttpClient) { }

  // generate token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //loginnUser
  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }
  
  //isLogin : is user login or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==null || tokenStr==undefined || tokenStr==''){
      return false;
    }
    return true;
  }

  //logout=> remove token from localstorage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem("token");
  }

  //set user detail
  public setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user));
  }

  //get User
  public getUser(){
    let userStr=localStorage.getItem('user');
    
    if(userStr==null || userStr=='' || userStr==undefined){
      this.logout();
      return null;
    }
    return JSON.parse(userStr);    
  }

  //get userRole
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

  //current user which is loggedin
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }
}
