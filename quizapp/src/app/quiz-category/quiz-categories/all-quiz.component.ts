import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import { Category} from 'src/app/models/category-question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-quiz',
  templateUrl: './all-quiz.component.html',
  styleUrls: ['./all-quiz.component.css'],
})
export class AllQuizComponent implements OnInit {
  @Output() quizTaken = new EventEmitter<Category>();

  categoryList: Category[] = [];
  selectedCategory: any;

  constructor(
    private questionService: QuestionService,
    private router: Router

    ) {}

  ngOnInit(): void {
    this.getAllCategory();
  }
  getAllCategory() {
    this.questionService
      .getCategoryJson()
      .pipe(first())
      .subscribe(
        (res: any) => {
          this.categoryList = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }
  takeQuiz(category: Category){
    this.router.navigate(["/questions", category.id])
  }

  deleteCategory(id: number){
    let indexToBeDeleted: any = this.categoryList.find(category => category.id === id )
    if(indexToBeDeleted != -1) {
      this.categoryList.splice(indexToBeDeleted,1)

    }
  }
  createQuestions(category: Category){
    this.router.navigate(['/questions', category.id])

  }
  
}
