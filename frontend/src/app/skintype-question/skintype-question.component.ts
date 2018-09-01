import { Component, OnInit } from '@angular/core';
import {YesnoQuestionService} from '../yesno-question.service';
import {YesNoQuestion, YesNoResult} from '../yesno-question';

@Component({
  selector: 'app-skintype-question',
  templateUrl: './skintype-question.component.html',
  styleUrls: ['./skintype-question.component.css']
})
export class SkintypeQuestionComponent implements OnInit {

  yesNoQuestions: YesNoQuestion[] = [];
  yesNoResults: YesNoResult[] = [];
  constructor(private yesNoQuestionService: YesnoQuestionService) { }

  ngOnInit() {
    this.getQuestions();
    this.getResults();
  }

  getQuestions(): void{
    this.yesNoQuestionService.getQuestions().subscribe(questions => this.yesNoQuestions = questions);
  }

  getResults(): void{
    this.yesNoQuestionService.getResults().subscribe(results => this.yesNoResults = results);
  }

}
