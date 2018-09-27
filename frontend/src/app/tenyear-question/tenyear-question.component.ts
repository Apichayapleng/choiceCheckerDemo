import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-tenyear-question',
  templateUrl: './tenyear-question.component.html',
  styleUrls: ['./tenyear-question.component.css']
})
export class TenyearQuestionComponent implements OnInit {

  foods: string[] = [];
  currentQuestion: string;
  item: number;
  private QA: FormGroup;
  private QB: FormGroup;
  private QC: FormGroup;
  private QD: FormGroup;

  warningText1: string;

  isResult: boolean = false;
  result: string;

  constructor(private router: Router, public matDialog: MatDialog, private formBuilder: FormBuilder,public dialogRef: MatDialogRef<TenyearQuestionComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    this.item = 0;
    this.QA = this.formBuilder.group({
      a1: ['', Validators.required],
      a2: ['', Validators.required],
      a3: ['', Validators.required],
      a4: ['', Validators.required],
      a5: ['', Validators.required],
      a6: ['', Validators.required],
      a7: ['', Validators.required],
      a8: ['', Validators.required]
    });
    this.QB = this.formBuilder.group({
      b1: ['', Validators.required],
      b2: ['', Validators.required],
      b3: ['', Validators.required],
      b4: ['', Validators.required],
      b5: ['', Validators.required]
    });
    this.QC = this.formBuilder.group({
      c1: ['', Validators.required],
      c2: ['', Validators.required],
      c3: ['', Validators.required],
      c4: ['', Validators.required],
      c5: ['', Validators.required]
    });
    this.QD = this.formBuilder.group({
      d1: ['', Validators.required],
      d2: ['', Validators.required],
      d3: ['', Validators.required],
      d4: ['', Validators.required],
      d5: ['', Validators.required]
    });
  }

  addFoodType(type: string){
    //console.log(type);
    if(this.foods.includes(type)){
      const index = this.foods.indexOf(type);
      if(index != -1){
        this.foods.splice(index,1);
      }
    }else{
      this.foods.push(type);
    }
  }

  onNextBtn(){
    if(this.foods.length != 4){
      this.warningText1 = "อย่าลืมเลือกคำตอบให้ครบนะ";
      return
    }
    this.currentQuestion = this.foods[0];
    this.item = 1;
    
    //this.router.navigateByUrl("/tenyear-choise/"+this.foods[0]+this.foods[1]+this.foods[2]+this.foods[3]);
  }

  onQASubmit(){
    let i = 0;
    let a: string[] = [
      this.QA.get('a1').value, 
      this.QA.get('a2').value,
      this.QA.get('a3').value,
      this.QA.get('a4').value,
      this.QA.get('a5').value,
      this.QA.get('a6').value,
      this.QA.get('a7').value,
      this.QA.get('a8').value,
    ]
    for(let j = 0; j < a.length; j++){
      if(a[j] == "true"){
        i++;
      }
    }
    if(i >= 5){
      //this.router.navigateByUrl("/tenyear-result/1");
      this.isResult = true;
      this.result = "1";
    }
    else{
      this.item++;
      if(this.item == 5){
        //this.router.navigateByUrl("/tenyear-result/5");
        this.isResult = true;
        this.result = "5";
      }
      else{
        this.currentQuestion = this.foods[this.item-1];
      }
    }
  }
  
  onQBSubmit(){
    let i = 0;
    let b: string[] = [
      this.QB.get('b1').value, 
      this.QB.get('b2').value,
      this.QB.get('b3').value,
      this.QB.get('b4').value,
      this.QB.get('b5').value
    ]
    for(let j = 0; j < b.length; j++){
      if(b[j] == "true"){
        i++;
      }
    }
    if(i >= 3){
      //this.router.navigateByUrl("/tenyear-result/2");
      this.isResult = true;
      this.result = "2";
    }
    else{
      this.item++;
      if(this.item == 5){
        // this.router.navigateByUrl("/tenyear-result/5");
        this.isResult = true;
      this.result = "5";
      }
      else{
        this.currentQuestion = this.foods[this.item-1];
      }
    }
  }

  onQCSubmit(){
    let i = 0;
    let c: string[] = [
      this.QC.get('c1').value, 
      this.QC.get('c2').value,
      this.QC.get('c3').value,
      this.QC.get('c4').value,
      this.QC.get('c5').value
    ]
    for(let j = 0; j < c.length; j++){
      if(c[j] == "true"){
        i++;
      }
    }
    if(i >= 3){
      // this.router.navigateByUrl("/tenyear-result/3");
      this.isResult = true;
      this.result = "3";
    }
    else{
      this.item++;
      if(this.item == 5){
        // this.router.navigateByUrl("/tenyear-result/5");
        this.isResult = true;
      this.result = "5";
      }
      else{
        this.currentQuestion = this.foods[this.item-1];
      }
    }
  }

  onQDSubmit(){
    let i = 0;
    let d: string[] = [
      this.QD.get('d1').value, 
      this.QD.get('d2').value,
      this.QD.get('d3').value,
      this.QD.get('d4').value,
      this.QD.get('d5').value
    ]
    for(let j = 0; j < d.length; j++){
      if(d[j] == "true"){
        i++;
      }
    }
    if(i >= 3){
      // this.router.navigateByUrl("/tenyear-result/4");
      this.isResult = true;
      this.result = "4";
    }
    else{
      this.item++;
      if(this.item == 5){
        // this.router.navigateByUrl("/tenyear-result/5");
        this.isResult = true;
        this.result = "5";
      }
      else{
        this.currentQuestion = this.foods[this.item-1];
      }
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
