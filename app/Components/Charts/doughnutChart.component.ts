
import { Component, Input, ElementRef, OnInit,ViewChild } from '@angular/core';
import {DoughnutChartModel} from "../../Models/ChartModels"
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
  selector: 'doughnut-chart',
  templateUrl: './app/Views/Charts/doughnutChart.html',
  styles: ['>>> .modal-xl { width: 1100px; }'],
})
export class DoughnutChartComponent {

   @ViewChild('myModal3') modal: ModalComponent;
   @Input() model;
   @Input() isParent = false;
    
  public chartClicked(e:any):void {
    console.log(e);
     this.modal.open();
  }


}