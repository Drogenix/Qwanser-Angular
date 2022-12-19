export interface User
{
  id:number;

  username:string;

  registrationDate: Date;

  lastActivity: Date;

  bio:string;

  imageUrl:string;

  answersCount:number;

  questionsCount:number;
}
