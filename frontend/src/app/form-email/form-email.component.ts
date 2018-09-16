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
    // let params: URLSearchParams= new URLSearchParams();
    // let options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*' 
    //   })
    // };
    // params.set('to', 'admins@choicechecker.net');
    // params.set('from', 'parata.momo@gmail.com');
    // params.set('subject', 'test-send-email');
    // params.set('content', 'Hello, World');
    var content = this.buildPersonalData();
    let header = new Headers();
    header.append('Accept', 'q=0.8;application/json;q=0.9');
    const data = {
      headers: header,
      text: content,
      fromEmail: this.email
    };
    return this.http.post(url, data, {responseType: 'text'}).subscribe();
    // return this.http.post(url, params, options)
    //         .pipe(catchError(this.handleError));
  }

  private buildPersonalData(): string{
    var personalData = "1. ชื่อ-สกุล: " + this.fullname+ "\r\n"+
      "2. เพศ: " + this.gender + "\r\n" +
      "3. อีเมล: " + this.email + "\r\n" +
      "4. โทรศัพท์: " + this.phoneNo + "\r\n" +
      "5. อาชีพ: " + this.job + "\r\n"+
      "6. ช่วงอายุ: " + this.age + "\r\n" +
      "7. รายละเอียดเพิ่มเติม: " + this.story + "\r\n";
    if(this.type == "face"){
        personalData = personalData + "ปัญหาที่ปรึกษา: " + "ต้องการปรึกษาปัญหาเกี่ยวกับใบหน้า" + "\r\n"+
          "8. ปัจจุบันคุณใช้สกินแคร์ เครื่องสำอางหรืออาหารเสริมอะไรบ้าง: " + this.checkSkincare + "\r\n" +
          this.skincare + "\r\n"+
          "9. อดีตคุณเคยใช้สกินแคร์ เครื่องสำอางหรืออาหารเสริมอะไรบ้าง" + this.checkUseSkincare + "\r\n" + 
          this.usedSkincare + "\r\n"+
          "10. คุณเคยทานยาหรือฉีดยาเพื่อรักษาสิวหรือไม่: " + this.useAcne + "\r\n"+
          "11. คุณเคยทานยาหรือฉีดยาเพื่อรักษาฝ้าหรือไม่: " + this.useBlemish + "\r\n" +
          "12. คุณเคยทานยาหรือฉีดยาเพื่อให้ผิวขาว กระจ่างใสหรือไม่: " + this.useBrightSkin + "\r\n" +
          "13. ผิวหน้าของคุณแพ้ระดับไหน: " + this.level;     
    }
    else if(this.type == "body"){
        personalData = personalData + "ปัญหาที่ปรึกษา: " + "ต้องการปรึกษาปัญหาเกี่ยวกับใบหน้า" + "\r\n"+
          "8. น้ำหนัก และส่วนสูงของคุณ: " + "\r\n" +
          "น้ำหนัก: " + this.weight + " กิโลกรัม \r\n" +
          "ส่วนสูง: " + this.height + " เซนติเมตร \r\n" +
          "9. อาหารต่อไปนี้คุณชอบอะไรมากที่สุด จงเรียงลำดับ: "+ this.foods.toString() + "\r\n"+
          "10. ปัจจุบันนี้คุณทานอาหารเสริมเพื่อดูแลรูปร่างอะไรอยู่: " + this.checkDietaryFood + "\r\n" +
          this.dietaryFood + "\r\n"+
          "11. อดีตคุณเคยทานอาหารเสริมเพื่อดูแลรูปร่างอะไรอยู่: " + this.checkUsedDietaryFood + "\r\n"+
          this.usedDietaryFood + "\r\n"+
          "12. คุณเคยทานยาลดความอ้วนไหม: " + this.dietDrug + "\r\n"+
          "13. คุณเคยแพ้ยา อาหารเสริม หรือสกินแคร์อะไรบ้างไหม: " + this.drugAllergies + "\r\n"+
          this.drugAllergiesDetail;
        
    }
    return personalData;
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