import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  public getQuestions(id:any){
    return this.http.get(`${baseUrl}/question/quiz/`+id)
  }

  public addQuestion(que:any){
    return this.http.post(`${baseUrl}/question/`,que);
  }

  public deletequestion(id:any){
    return this.http.delete(`${baseUrl}/question/`+id);
  }

  public update(data:any){
    return this.http.put(`${baseUrl}/question/`,data)
  }
}
