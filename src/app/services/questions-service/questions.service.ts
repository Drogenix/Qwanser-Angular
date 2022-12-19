import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable, retry} from "rxjs";
import {Question} from "../../entity/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly _apiUrl: string;

  constructor(private httpClient:HttpClient)
  {
    this._apiUrl = environment.apiUrl + 'Questions';
  }

  getQuestions(lastQuestionId:number):Observable<Question[]>
  {
    const url = this._apiUrl + '?lastQuestionId='+lastQuestionId

    return this.httpClient.get<Question[]>(url).pipe(retry(10))
  }

  findQuestion(value:string)
  {
    const url = this._apiUrl + '/find?value='+value

    return this.httpClient.get<Question[]>(url).pipe(retry(1))

  }
}
