import { Injectable} from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ReviewService {
  baseurl = 'review';

  constructor(private apiService: ApiService) {}

  find(params = {}) {
    return this.apiService.get(
      `${this.baseurl}?${this.getParams(params)}`,
    );
  }
  get(id) {
    return this.apiService.get(
      `${this.baseurl}/${id}`,
    );
  }
  like(id, like) {
    return this.apiService.patch(
      `${this.baseurl}/id`,
      { like },
    );
  }
  getComment(id) {
    return this.apiService.get(
      `${this.baseurl}/${id}/comment`,
    );
  }
  createComment(id, comment) {
    return this.apiService.post(
      `${this.baseurl}/${id}/comment`,
      comment,
    );
  }
  delecteComment(reviewId, commentId) {
    return this.apiService.delete(
      `${this.baseurl}/${reviewId}/comment/${commentId}`,
    );
  }

  getParams(params) {
    return Object.keys(params).reduce(
      (currentValue, key) => `${currentValue}&${key}=${params[key]}`,
      '',
    );
  }

}
