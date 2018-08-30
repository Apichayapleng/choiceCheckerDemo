import { Injectable } from '@angular/core';
import {YesNoQuestions, YesNoResults, YesNoQuestion, YesNoResult} from './yesno-question';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YesnoQuestionService {

  constructor() { }

  getQuestions(): Observable<YesNoQuestion[]>{
    return of(YesNoQuestions);
  }

  getQuestion(id: number): Observable<YesNoQuestion>{
    return of(YesNoQuestions.find(question => question.id === id));
  }

  getResults(): Observable<YesNoResult[]>{
    return of(YesNoResults);
  }

  getResult(id: number): Observable<YesNoResult>{
    return of(YesNoResults.find(result => result.id === id));
  }

}
