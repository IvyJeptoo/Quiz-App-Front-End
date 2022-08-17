import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})
export class CreatequizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  // createquestions(){
  //   this.router.navigate(['createquestions'], {relativeTo: this.route})
  // }
  addquestions(){
    this.router.navigate(['createquestions'], {relativeTo: this.route})
  }

}
