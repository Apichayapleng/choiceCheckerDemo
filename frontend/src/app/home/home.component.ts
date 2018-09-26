import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Subscription } from 'rxjs';
import {TenyearQuestionComponent} from '../tenyear-question/tenyear-question.component';
import {SkintypeQuestionComponent} from '../skintype-question/skintype-question.component';
import {FormEmailComponent} from '../form-email/form-email.component';
import {SkinProblemComponent} from '../skin-problem/skin-problem.component';
import {YoutubeService} from '../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

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
  youtubeLike1;
  youtubeLike2;
  youtubeLike3;
  youtubeSub: Subscription;

  constructor(public matDialog: MatDialog, private youtubeService: YoutubeService) {
    this.youtubeSub = youtubeService.find().subscribe(
      (data) => {
        const [y1, y2, y3] = data;
        this.youtubeLike1 = y1;
        this.youtubeLike2 = y2;
        this.youtubeLike3 = y3;
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.youtubeSub.unsubscribe();
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
