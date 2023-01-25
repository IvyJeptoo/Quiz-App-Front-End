import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  EMPTY,  mergeMap, Observable, of } from 'rxjs';
import { Category,Question } from '../models/category-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {  
  url = "http://localhost:3000"
  
 

  constructor(private http : HttpClient) { }

    // get all category details
  getCategoryJson(): Observable<Category> {
    return this.http.get<Category>(this.url + "/category")
  }
  deleteCategory(id:number){
    return this.http.delete(this.url + "/category")
  }
  getCategoryQuestions():Observable<Question>{
   
    return this.http.get<Question>(this.url + "/questions")
  }
  saveNewCategory(categoryData:any, file:File):Observable<Category>{
    const formData = new FormData();
    formData.append('categoryData', new Blob([JSON.stringify(categoryData)], {
      type: "application/json"
    }));
    formData.append('file', file);
    return this.http.post<Category>(this.url + "/category", formData)  

  }
  saveCategoryQuestions(questionsData:any):Observable<Question>{
    return this.http.post<Question>(this.url + "/questions", questionsData)

  }
  
  

 


  

}
