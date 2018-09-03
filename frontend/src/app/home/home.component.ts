import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {TenyearQuestionComponent} from '../tenyear-question/tenyear-question.component';
import {SkintypeQuestionComponent} from '../skintype-question/skintype-question.component';
import {FormEmailComponent} from '../form-email/form-email.component';
import {SkinProblemComponent} from '../skin-problem/skin-problem.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // videoList = [
  //   {
  //    name: 'item 1',
  //    slug: 'item-1',
  //     embed: '<div style="position: relative; height: 0; padding-bottom: 56.25%"><iframe width="560" height="315" src="https://www.youtube.com/embed/IMEE1_zhfhs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
  //   },
  //   {
  //     name: 'item 2',
  //     slug: 'item-2',
  //     embed: '<div style="position: relative; height: 0; padding-bottom: 56.25%"><iframe width="560" height="315" src="https://www.youtube.com/embed/IMEE1_zhfhs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
  //   },
  //   {
  //     name: 'item 3',
  //     slug: 'item-3',
  //     embed: '<div style="position: relative; height: 0; padding-bottom: 56.25%"><iframe width="560" height="315" src="https://www.youtube.com/embed/IMEE1_zhfhs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
  //   }
  // ];

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
  }

  onClickTenYear(){
    let dialogRef = this.matDialog.open(TenyearQuestionComponent, {
      width: '600px'
    });
  }

  onClickSkinType(){
    let dialogRef = this.matDialog.open(SkintypeQuestionComponent, {
      width: '600px'
    });
  }

  onClickForm(){
    let dialogRef = this.matDialog.open(FormEmailComponent, {
      width: '600px'
    });
  }

  onClickSkinProblem(){
    let dialogRef = this.matDialog.open(SkinProblemComponent, {
      width: '600px'
    });
  }
}
