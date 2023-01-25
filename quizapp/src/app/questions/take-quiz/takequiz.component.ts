import { getLocaleId } from '@angular/common';
import { Component, OnInit, Input, OnDestroy, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, interval, Subscription } from 'rxjs';
import { Category, Question, Option } from 'src/app/models/category-question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-takequiz',
  templateUrl: './takequiz.component.html',
  styleUrls: ['./takequiz.component.css'],
})
export class TakequizComponent implements OnInit {
  public questionList: Question[] = [];
  public currentQuestionIndex: number = 0;
  public questionsCategoryList: any;
  public selectedCategory: any;

  correctAnswers: Array<any> = [];
  counter = 60;
  interval$: any;
  categoryId: any;
  selectedAnswers: Array<string> = [];
  isQuizCompleted: Boolean = false;
  answerPercentage: any;
  buttonDisable = true;
  option: any;
  answerIsClicked: Boolean = false;
  question!: Question;

  constructor(
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute
  ) {}

    // gets all the questions to a specific category
  getCategoryQuestions() {
    this.categoryId = this.activatedRoute.snapshot.params['categoryId'];
    this.questionService
      .getCategoryQuestions()
      .pipe(first())
      .subscribe(
        (res: any) => {
          this.questionsCategoryList = res;
          this.questionList = this.questionsCategoryList.filter(
            (category: any) => category.categoryId === Number(this.categoryId)
          );
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // starts the counter when the user takes the question
  startCounter() {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 10) this.changeTimerColor('red');
      
      if (this.counter === 0) {       
        this.changeTimerColor('black');
        if(this.currentQuestionIndex +1 === this.questionList.length) {
          this.stopCounter()
          this.viewResults()
          return
        };  
        this.currentQuestionIndex++;
        this.counter = 60;      
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 60000);
  }

  // changes the color of the timer when 10 seconds are remaining
  changeTimerColor(color: string) {
    const timerElement = document.querySelector('.timer');
    if (timerElement) {
      (timerElement as HTMLElement).style.color = color;
    }
  }

  // stops the counter when the questions are over
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  // shows the results after completing the questions
  viewResults() {    
    this.saveCorrectAnswers();
    this.isQuizCompleted = true;
    this.stopCounter();
    
  }

  // takes user to the next question
  nextQuestion() {    
    this.saveCorrectAnswers();
    this.currentQuestionIndex++;
    this.counter = 60;
    this.answerIsClicked = false;
    
  }

  saveCorrectAnswers(){
    if(this.question?.userAnswer?.correct === true  ){
      this.correctAnswers.push(this.question.userAnswer)
    }
    this.answerPercentage =
      (this.correctAnswers.length / this.questionList.length) * 100;
  }


  // background color for a clicked answer
  onAnswerClick(option: Option) {    
    this.answerIsClicked = true;
    this.question = this.questionList[this.currentQuestionIndex];  
    if(option && Object.keys(option).length === 1) {
      option.correct = false;
    }
    this.question.userAnswer = option;
     
    
    
  }

  ngOnInit(): void {
    this.getCategoryQuestions();
    this.startCounter();
  }
}
