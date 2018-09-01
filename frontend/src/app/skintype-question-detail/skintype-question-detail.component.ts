import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {YesnoQuestionService} from '../yesno-question.service';
import { YesNoQuestion, YesNoResult } from '../yesno-question';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-skintype-question-detail',
  templateUrl: './skintype-question-detail.component.html',
  styleUrls: ['./skintype-question-detail.component.css']
})
export class SkintypeQuestionDetailComponent implements OnInit {

  question: YesNoQuestion;
  questions: YesNoQuestion[] = [];
  isResult: boolean = false;
  yesNoResult: YesNoResult;
  constructor(private activatedRoute: ActivatedRoute, private location: Location, private yesNoQuestionService: YesnoQuestionService, private router: Router, public dialogRef: MatDialogRef<SkintypeQuestionDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
    console.log("test");
    this.getQuestions();
    this.question = this.questions[0];
  }

  getQuestions(){
    this.yesNoQuestionService.getQuestions().subscribe(questions => this.questions = questions);
  }

  getQuestion(id: number){
    // const id = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.yesNoQuestionService.getQuestion(id).subscribe(question => this.question = question);
    this.question = this.questions[id -1];
  }

  onClickQuestion(id: number){
    this.getQuestion(id);
   //this.router.navigateByUrl("/skintype-question-detail/"+id);
  }

  onClickResult(id: number){
    //this.router.navigateByUrl("/skin-result/"+id);
    this.isResult = true;
    this.yesNoQuestionService.getResult(id).subscribe(result => this.yesNoResult = result);
  }

  onCloseDialog(){
      this.dialogRef.close();
  }
}
