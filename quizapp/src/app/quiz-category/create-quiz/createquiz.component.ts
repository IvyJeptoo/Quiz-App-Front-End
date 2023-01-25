import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms'
import { QuestionService } from 'src/app/services/question.service';



@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})
export class CreatequizComponent implements OnInit {

  selectedFile = null;
  img!: File;

  constructor(
    private questionService: QuestionService,
    private router: Router

  ) { }
  createCategory = new FormGroup({
    title: new FormControl(''),
    img: new FormControl(null),
    desc: new FormControl(''),

    });

  messageAlert:boolean = false;

  ngOnInit(): void {
  }
  submitCategory(){
    this.questionService.saveNewCategory(this.createCategory.value, this.img)
    .subscribe(category => {
      this.messageAlert= true;
      this.createCategory.reset({});

    });   

  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.img = event.target.files[0];
    }
  }
  
  
  closeAlert(){
    this.messageAlert= false;
    this.router.navigate(['/quiz/all-quiz'])
    

  }
}
