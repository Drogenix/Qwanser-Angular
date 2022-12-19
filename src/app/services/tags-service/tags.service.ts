import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable, retry} from "rxjs";
import {Tag} from "../../entity/tag";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private readonly _apiUrl: string;

  constructor(private httpClient:HttpClient)
  {
    this._apiUrl = environment.apiUrl + 'tags';
  }

  searchTags(inputValue:string):Observable<Tag[]>
  {
    const url = this._apiUrl + '/search?value='+inputValue

    return this.httpClient.get<Tag[]>(url).pipe(retry(10))
  }

  getTags(id:number):Observable<Tag[]>
  {
    const url = this._apiUrl + '?id='+id;

    return this.httpClient.get<Tag[]>(url).pipe(retry(10))
  }

  getPopularTags(count:number):Observable<Tag[]>
  {
    const url = this._apiUrl + '/most-popular?count='+count;

    return this.httpClient.get<Tag[]>(url).pipe(retry(10))
  }
}
