import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

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
  constructor(public dialogRef: MatDialogRef<FormEmailComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

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
    this.dialogRef.close();
  }
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