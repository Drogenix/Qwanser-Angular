import {User} from "./user";
import {QuestionTag} from "./questionTag";

export interface Question
{
  id:number;

  title:string;

  description:string;

  user:User;

  tags:QuestionTag[];

  date:Date;

  htmlContent:string;

  answersCount:number;

  viewsCount:number;

  isClosed:boolean;
}
