import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  userReviews: any;

  constructor(private reviewService: ReviewService) {
    this.userReviews = this.reviewService.find({ limit: 3, type: 'USER' });
  }

  ngOnInit() {
  }

}
