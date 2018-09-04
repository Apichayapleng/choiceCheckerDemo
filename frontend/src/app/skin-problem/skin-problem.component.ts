import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skin-problem',
  templateUrl: './skin-problem.component.html',
  styleUrls: ['./skin-problem.component.scss']
})
export class SkinProblemComponent implements OnInit {

  part: number = 1;
  
  constructor(public dialogRef: MatDialogRef<SkinProblemComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onClickNext(){
    this.part += 1;
  }

  onFormSubmit(){

  }
}
