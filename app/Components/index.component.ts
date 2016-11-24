import { Component, Directive, OnInit } from '@angular/core';
import  * as ChartModels  from "../Models/ChartModels";
import { TrelloAPI } from '../Services/trello.Service';
import * as TrelloAPIModels from '../Models/TrelloAPIModels';

@Component({
  selector: 'trello-app',
  templateUrl: './app/Views/Index.html',
})
export class IndexComponent {
   
  devStatus: ChartModels.DoughnutChartModel;
  testingStatus: ChartModels.DoughnutChartModel;
  refinementStatus: ChartModels.DoughnutChartModel;
  
  ngOnInit() {   
    this.devStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Dev',], [350, 450], new ChartModels.LegendModel('bottom'));
    this.testingStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Test',], [350, 40], new ChartModels.LegendModel('bottom'));
    this.refinementStatus = new ChartModels.DoughnutChartModel(['Refined', 'In Test',], [350, 40], new ChartModels.LegendModel('bottom'));
  }
}
