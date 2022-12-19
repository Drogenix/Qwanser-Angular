import { Component, OnInit } from '@angular/core';
import {TagsService} from "../services/tags-service/tags.service";
import {Tag} from "../entity/tag";
import {catchError, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-qnser-tags',
  templateUrl: './qnser-tags.component.html',
  styleUrls: ['./qnser-tags.component.css']
})
export class QnserTagsComponent implements OnInit {

  tags:Tag[]

  constructor(private tagsService:TagsService) { }

  ngOnInit(): void {
    this.tagsService.getTags(0).subscribe(response=>{
      if(response != null)
      {
        this.tags = response;
      }
    })
  }

  showMoreTags() {
    const lastTagId = this.tags[this.tags.length-1].id;

    this.getTags(lastTagId)
  }

  filterTags(value:string) {
    if(value != null && value != '')
    {
      this.tagsService.searchTags(value).pipe(catchError(err=> this.handleFilterError(err))).subscribe(response=>{
        if(response != null)
        {
          this.tags = response;
        }
      })
    }
    else
    {
      this.tags = [];
      this.getTags(0)
    }
  }

  getTags(id:number) {
    this.tagsService.getTags(id).subscribe(response=>{
      if(response != null)
      {
        this.tags = this.tags.concat(response)
      }
    })
  }

  private handleFilterError(error:HttpErrorResponse) {

    return throwError(()=>new Error(error.message))
  }
}
