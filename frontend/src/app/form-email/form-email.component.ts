import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import {HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.css']
})
export class FormEmailComponent implements OnInit {

  personalForm: PersonalForm;
  fullname: string;
  gender: string;
  email: string;
  phoneNo: string;
  job: string;
  age: string;
  story: string;
  skincare: string;
  usedSkincare: string;
  useAcne: string;
  useBlemish: string;
  useBrightSkin: string;
  level: number;
  image: ImageData;
  height: number;
  weight: number;
  favoriteFood: string;
  dietaryFood: string;
  usedDietaryFood: string;
  dietDrug: string;
  drugAllergies: string;
  drugAllergiesDetail: string;

  type: string;
  checkSkincare: boolean;
  checkUseSkincare: boolean;
  foods: string[] = [];
  checkDietaryFood: boolean;
  checkUsedDietaryFood: boolean;
  constructor(public dialogRef: MatDialogRef<FormEmailComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private http: HttpClient) { }

  ngOnInit() {
  }

  onClickFood(food: string){
    if(this.foods.includes(food)){
      const index = this.foods.indexOf(food);
      if(index != -1){
        this.foods.splice(index,1);
      }
    }else{
      this.foods.push(food);
    }
  }

  onSubmit(){
    this.sendEmail();
    this.dialogRef.close();
  }

  sendEmail(){
    let url = "https://us-central1-choicechecker-2c6d5.cloudfunctions.net/httpEmail";
    let params: URLSearchParams= new URLSearchParams();
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
      })
    };
    params.set('to', 'prot.p@ku.th');
    params.set('from', 'parata.momo@gmail.com');
    params.set('subject', 'test-send-email');
    params.set('content', 'Hello, World');
    let header = new Headers();
    header.append('Accept', 'q=0.8;application/json;q=0.9');
    const data = {
      headers: header,
      text: "test"
    };

    return this.http.post(url, data, {responseType: 'text'}).subscribe();
    // return this.http.post(url, params, options)
    //         .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

export class PersonalForm{
  Fullname: string;
  gender?: string;
  email: string;
  phoneNo?: string;
  job?: string;
  age: string;
  story?: string;
  skincare: string;
  usedSkincare?: string;
  useAcne: string;
  useBlemish: string;
  useBrightSkin: string;
  level: number;
  image?: ImageData;
  height?: number;
  weight?: number;
  favoriteFood?: string;
  dietaryFood?: string;
  usedDietaryFood?: string;
  dietDrug: string;
  drugAllergies: string;
  drugAllergiesDetail?: string;
}