import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  typeChart: any;
  dataChart: any;
  optionsChart: any;

  constructor() { }

  ngOnInit() {
    this.typeChart = 'doughnut';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'
    this.dataChart = {
      // labels: ["test"],
      datasets: [
        {
          label: "9.5",
          backgroundColor: ['#F06F7F'],
          data: [5],
        }
      ]
    };
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

}
