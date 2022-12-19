import { Component, OnInit } from '@angular/core';
import {User} from "../entity/user";
import {UsersService} from "../services/users-service/users.service";
import {catchError, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  isErrorOccured: boolean;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers(0).subscribe(response=>{
      if(response != null)
      {
        this.users = response;
      }
    })

  }

  private handleFilterError(error:HttpErrorResponse) {
    this.isErrorOccured = true;

    return throwError(error)
  }

  getUsers(lastUserId:number) {
    this.usersService.getUsers(lastUserId).subscribe(response=>{
      if(response != null)
      {
        this.isErrorOccured = false;

        this.users = this.users.concat(response);
      }
    })
  }

  filterUsers(inputValue:string) {
    if(inputValue == '')
    {
      this.getUsers(0)
    }
    else
    {
      this.usersService.findUsers(inputValue).pipe(catchError(err => this.handleFilterError(err))).subscribe(response => {
        if(response != null)
        {
          this.isErrorOccured = false;

          this.users = response;
        }
      })
    }
  }

  showMoreUsers() {
    const lastUserId = this.users[this.users.length-1].id

    this.getUsers(lastUserId)
  }
}
