/* tslint:disable */
import {Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewPageComponent implements OnInit, OnDestroy {
  review: {
    id: string,
    thumbnail: string,
    title: string,
    body: string,
    type: string,
    like?: number,
    comments: {
      id: number,
      name: string,
      comment: string,
    }[],
  }
  form: FormGroup;
  formErrors: any;
  sub: Subscription;
  reviewSub: Subscription;

  constructor(private sanitizer: DomSanitizer,  private formBuilder: FormBuilder, private route: ActivatedRoute,
              private reviewService: ReviewService) {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      // api get review by id
      this.reviewSub = this.reviewService.get(id).subscribe(
        (data) => {
          this.review = data;
        }
      )
    });
  }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.reviewSub.unsubscribe();
  }

  bypassSecurity(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

  onLike() {
    this.review.like += 1
    //api like review
    this.reviewService.like(this.review.id, this.review.like).subscribe();
    console.log('api like review')
  }

  onDelete() {
    // api delete review
    console.log('api delete review')
  }

  onDeleteComment(id) {
    this.review.comments = this.review.comments.filter((comment) => comment.id !== id);
    // api delete comment
    this.reviewService.delecteComment(this.review.id, id);
    console.log('api delete comment')
  }

  onAddComment() {
    const comment = this.form.value
    // api add comment
    this.reviewService.createComment(this.review.id, comment);
    console.log('api add comment')
  }

  initForm() {
    this.formErrors = {
      name: {},
      body: {},
    };
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      body: ['', Validators.required],
    });
    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  private onFormValuesChanged(): void {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.formErrors[field] = {};

      // Get the control
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }

}
