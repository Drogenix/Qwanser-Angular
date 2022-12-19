import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable, retry} from "rxjs";
import {User} from "../../entity/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly _apiUrl: string;

  constructor(private httpClient:HttpClient)
  {
    this._apiUrl = environment.apiUrl + 'Users';
  }

  getUsers(lastUserId:number):Observable<User[]>
  {
    const url = this._apiUrl + '?lastUserId='+lastUserId

    return this.httpClient.get<User[]>(url).pipe(retry(10))
  }

  getMostActiveUsers():Observable<User[]>
  {
    const url = this._apiUrl + '/most-active'

    return this.httpClient.get<User[]>(url).pipe(retry(10))
  }

  findUsers(value:string)
  {
    const url = this._apiUrl + '/find?value='+value

    return this.httpClient.get<User[]>(url).pipe(retry(2))
  }
}
