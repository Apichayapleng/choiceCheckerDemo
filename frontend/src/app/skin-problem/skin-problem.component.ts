import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skin-problem',
  templateUrl: './skin-problem.component.html',
  styleUrls: ['./skin-problem.component.scss']
})
export class SkinProblemComponent implements OnInit {

  theForm: FormGroup;
  part: number = 1;
  skintype: string;
  pimples = [
    {id:1, value: "1. สิวอุดตัน (หัวขาว)  หรือหลายคนเรียกว่าสิวผด ลักษณะเป็นตุ่มเม็ดเล็กๆ กระจายอยู่บริเวณต่างๆของใบหน้าโดยเฉพาะหน้าผาก ระหว่างคิ้ว แก้ม "},
    {id:2, value: "2. สิวอุดตัน (หัวแดง) ลักษณะเป็นตุ่มแดงเหมือนยุงกัด กระจายอยู่บริเวณต่างๆของใบหน้าโดยเฉพาะหน้าผาก คาง แก้ม ขากรรไกร "},
    {id:3, value: "3. สิวอักเสบ (หัวเหลือง) ลักษณะเป็นตุ่มแดงอักเสบมีหนอง มักขึ้นบริเวณหน้าผาก คาง แก้ม "},
    {id:4, value: "4. รอยสิว ลักษณะเป็นร่องรอยหลงเหลือหลังจากเป็นสิว ลักษณะเป็นรอยแดง ม่วงๆ หรือดำๆ "},
    {id:5, value: "5. ไม่ใช่ทั้งหมดตามลักษณะข้างต้น "}
  ]
  wrinkles = [
    {id: 1, value: "ริ้วรอยร่องตื้น พบบริเวณหน้าผาก หางตา ใต้ตา หรือร่องแก้ม ในช่วงอายุตั้งแต่ 25 ปีถึง 40 ปี "},
    {id: 2, value: "ริ้วรอยร่องลึก พบบริเวณหน้าผาก หางตา ใต้ตา หรือร่องแก้ม ในช่วงอายุตั้งแต่ 40 ปีขึ้นไป"}
  ];
  dulls = [
    {id: 1, value: "ลักษณะผิวดูหมองคล้ำ ไม่กระจ่างใส  พบในทุกช่วงวัย"}
  ];
  pores = [
    {id: 1, value: "รูขุมขนอุดตัน ลักษณะไขมันอุดตันตามรูขุมขน หลายคนเรียกว่าสิวเสี้ยน โดยเฉพาะบริเวณจมูก ข้างแก้ม ใต้คาง"},
    {id: 2, value: "รูขุมขนกว้าง ลักษณะเห็นรูขุมขนชัดเจน โดยเฉพาะบริเวณจมูก แก้ม คาง"}

  ]
  blemishes = [
    {id: 1, value: "ฝ้าแดด"},
    {id: 2, value: "ฝ้าผู้สูงอายุ"},
    {id: 3, value: "ฝ้าฮอร์โมน"}
  ]

  constructor(public dialogRef: MatDialogRef<SkinProblemComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private formBuilder: FormBuilder) { 
    const pimpleControls = this.pimples.map(c => new FormControl(false));
    const wrinkleControls = this.wrinkles.map(c => new FormControl(false));
    const dullControls = this.dulls.map(c => new FormControl(false));
    const poresControls = this.pores.map(c => new FormControl(false));
    const blemishControls = this.blemishes.map(c => new FormControl(false));

    this.theForm = formBuilder.group({
      gender: new FormControl('male'),
      age: new FormControl('20'),
      job: new FormControl("0"),
      skintype: new FormControl("0"),
      pimples: new FormArray(pimpleControls),
      wrinkles: new FormArray(wrinkleControls),
      dulls: new FormArray(dullControls),
      pores: new FormArray(poresControls),
      blemishes: new FormArray(blemishControls),
      skinallergies: new FormControl("0")
    });
  }

  ngOnInit() {
  }

  onClickNext(){
    if(this.part == 3){

    }
    this.part += 1;
  }
}
