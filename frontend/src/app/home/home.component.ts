import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Subscription } from 'rxjs';
import {TenyearQuestionComponent} from '../tenyear-question/tenyear-question.component';
import {SkintypeQuestionComponent} from '../skintype-question/skintype-question.component';
import {FormEmailComponent} from '../form-email/form-email.component';
import {SkinProblemComponent} from '../skin-problem/skin-problem.component';
import {YoutubeService} from '../services/youtube.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ReviewService } from '../services/review.service';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  youtubeLink1;
  youtubeLink2;
  youtubeLink3;
  youtubeSub: Subscription;
  reviewSub: Subscription;
  productSub: Subscription;
  loading: boolean
  reviews1;
  reviews2;
  product1;
  product2;

  constructor(public matDialog: MatDialog, private youtubeService: YoutubeService,
              public sanitizer: DomSanitizer, private reviewService: ReviewService,
              private productService: ProductService) {
    this.loading = true;
    this.youtubeSub = youtubeService.find().subscribe(
      (data) => {
        const [y1, y2, y3] = data;
        this.youtubeLink1 = this.getYoutubeLink(y1.url);
        this.youtubeLink2 = this.getYoutubeLink(y2.url);
        this.youtubeLink3 = this.getYoutubeLink(y3.url);
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
    this.reviewSub = this.reviewService.find({ type: 'ADMIN', sortBy: 'title' }).subscribe(
      (data) => {
        this.reviews1 = data.slice(0, 3);
        this.reviews2 = data.slice(3, 7);
      },
      (err) => {
        console.log(err);
      }
    );
    this.productSub = this.productService.find({ sortBy: 'title' }).subscribe(
      (data) => {
        this.product1 = data.slice(0, 3);
        this.product2 = data.slice(3, 6);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.youtubeSub.unsubscribe();
    this.reviewSub.unsubscribe();
    this.productSub.unsubscribe();
  }

  getYoutubeLink(link) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
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
