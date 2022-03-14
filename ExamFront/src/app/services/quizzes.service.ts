import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private http:HttpClient) { }

  public getQuizzes(){
    return this.http.get(`${baseUrl}/quiz/`);
  }
  public getQuizzesById(id:any){
    return this.http.get(`${baseUrl}/quiz/category/`+id);
  }

  public addQuiz(data:any){
    return this.http.post(`${baseUrl}/quiz/`,data);
  }
  public deleteQuiz(id:any){
    return this.http.delete(`${baseUrl}/quiz/`+id);
  }

  public updateQuiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/update`,quiz)
  }
}
