
import { Component, Input, ElementRef, OnInit,ViewChild } from '@angular/core';
import {BarChartModel} from "../../Models/ChartModels"
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
  selector: 'bar-chart',
  templateUrl: './app/Views/Charts/barChart.html'
})
export class BarChartComponent {
   @ViewChild('myModal3')
    @Input() model;
     modal: ModalComponent;
  public chartClicked(e:any):void {
    console.log(e);
    this.modal.open();
  }
}