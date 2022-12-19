import { Component, OnInit } from '@angular/core';
import {QuestionsService} from "../services/questions-service/questions.service";
import {Question} from "../entity/question";
import {UsersService} from "../services/users-service/users.service";
import {User} from "../entity/user";
import {TagsService} from "../services/tags-service/tags.service";
import {Tag} from "../entity/tag";

@Component({
  selector: 'app-questions',
  templateUrl: './qnser-issues.component.html',
  styleUrls: ['./qnser-issues.component.css']
})
export class QuestionsComponent implements OnInit {

  questions:Question[]

  mostActiveUsers:User[]

  popularTags:Tag[]

  isQuestionsFounded:boolean = true;

  constructor(private questionsService:QuestionsService,
              private usersService:UsersService,
              private tagsService:TagsService) { }

  ngOnInit(): void {
    this.getQuestions(0,false)

    this.usersService.getMostActiveUsers().subscribe(response => {
      if(response != null)
      {
        this.mostActiveUsers = response;
      }
    })

    this.tagsService.getPopularTags(6).subscribe(response => {
      if(response != null)
      {
        this.popularTags = response;
      }
    })
  }

  getQuestions(lastQuestionId:number, appendResponse:boolean) {
    this.questionsService.getQuestions(lastQuestionId).subscribe(response =>{
      if(response != null)
      {
        if(appendResponse)
        {
          this.questions = this.questions.concat(response);
        }
        else
        {
          this.questions = response;
        }
      }
    })
  }

  onInputChanged(value:string) {
    if(value != '')
    {
      this.questionsService.findQuestion(value).subscribe(response =>{
        if(response)
        {
          this.isQuestionsFounded = false;
        }
        else
        {
          this.questions = response;
        }
      })
    }
    else
    {
      this.isQuestionsFounded = true;

      this.getQuestions(0,false)
    }
  }

}
