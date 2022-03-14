import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategariesService {
  constructor(private http:HttpClient) { }

  public getCategaries(){
    return this.http.get(`${baseUrl}/category/`)
  }

  public addCategory(data:any){
    return this.http.post(`${baseUrl}/category/`,data);
  }
}
