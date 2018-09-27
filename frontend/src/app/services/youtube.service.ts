import { Injectable} from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class YoutubeService {
  baseurl = 'youtube';

  constructor(private apiService: ApiService) {}

  find(params = {}) {
    console.log('hello')
    return this.apiService.get(
      `${this.baseurl}?${this.getParams(params)}`,
    );
  }

  getParams(params) {
    return Object.keys(params).reduce(
      (key, currentValue) => `${currentValue}&${key}=${params[key]}`,
      '',
    );
  }

}
