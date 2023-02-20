export class Category {
    id: number = 0;
    img: string = '';
    title: string = '';
    desc: string = '';
  }
  
  export class Question {
    questionText: string = '';
    userAnswer?:  Option = {text: '', correct: false};
    options: Option[] = [];
    explanation: string = '';
    categoryId: number = 0;
  }
  
  export class Option {
    text: string = '';
    correct: boolean = false;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  