import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Category } from 'src/app/models/category-question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm: any = "";
  categoryList: Category[] = [];
  filteredCategory: Category[] = [];

  constructor(
    private questionService: QuestionService
    ) { }

 
  getAllCategory() {
    this.questionService
      .getCategoryJson()
      .pipe(first())
      .subscribe(
        (res: any) => {
          this.categoryList = res.category;
          
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
  searchCategory(){
    this.filteredCategory = this.categoryList.filter(category => 
      category.title.toLowerCase().includes(this.searchTerm.toLowerCase())    
      
    )
    console.log(this.filteredCategory);
    

  }
  // createQuiz(){
  //   console.log("hello");
    

  // }

  ngOnInit(): void {
    this.getAllCategory()
  }

}
