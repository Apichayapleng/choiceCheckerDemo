import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(protected http: HttpClient) {}

  public setHeaders(contentType = 'application/json'): HttpHeaders {
    const header = new HttpHeaders({
      'Content-Type': contentType,
    });
    return header;
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params?: HttpParams): Observable<any> {
    return this.http.get(
      `${environment.api_url}${path}`,
      {headers: this.setHeaders()});
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    );
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      {headers: this.setHeaders()}
    );
  }
}
