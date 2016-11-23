
import { Component, Input, ElementRef, OnInit } from '@angular/core';
import {DoughnutChartModel} from "../../Models/ChartModels"

@Component({
  selector: 'doughnut-chart',
  templateUrl: './app/Views/Charts/doughnutChart.html'
})
export class DoughnutChartComponent {
  // Doughnut
   @Input() model;

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}