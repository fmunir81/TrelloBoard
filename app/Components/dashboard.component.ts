/// < reference path="../Models/ChartModels.ts" />
import { Component, Directive, OnInit } from '@angular/core';
import  * as ChartModels  from "../Models/ChartModels";
import { TrelloAPI } from '../Services/trello.Service';
import * as TrelloAPIModels from '../Models/TrelloAPIModels';
import { ActivatedRoute,Router,Params } from '@angular/router'

@Component({
  selector: 'trello-app',
  templateUrl: './app/Views/dashboard.html',
  providers: [TrelloAPI]
})
export class DashBoardComponent {
  devStatus: ChartModels.DoughnutChartModel=new ChartModels.DoughnutChartModel([],[],[],new ChartModels.LegendModel('bottom'));
  testingStatus: ChartModels.DoughnutChartModel;
  refinementStatus: ChartModels.DoughnutChartModel;
  ifCards : TrelloAPIModels.LabelModel[];
  boardId : string;
  constructor(private _trelloService: TrelloAPI, private route: ActivatedRoute,private router: Router) {
    
  }
  ngOnInit() {
    this.boardId = this.route.snapshot.params['id'];
    this._trelloService.getIFLabelsStats(this.boardId)
     .subscribe(p=>this.renderIFChart(p));
    
    
    this.testingStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Test',], [350, 40],["sky","blue"],new ChartModels.LegendModel('bottom'));
    this.refinementStatus = new ChartModels.DoughnutChartModel(['Refined', 'In Test',], [350, 40],["sky","blue"], new ChartModels.LegendModel('bottom'));

  }
  renderIFChart(models:TrelloAPIModels.LabelModel[]){
    debugger;
    var labels = models.sort((a,b)=>{
      var textA = a.Name.toUpperCase();
      var textB = b.Name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    }).map((label:TrelloAPIModels.LabelModel)=>{
      return label.Name;
    }); 
     var numbers = models.sort((a,b)=>{
      var textA = a.Name.toUpperCase();
      var textB = b.Name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    }).map((label:TrelloAPIModels.LabelModel)=>{
      return label.uses;
    }); 
     var colors = models.sort((a,b)=>{
      var textA = a.Name.toUpperCase();
      var textB = b.Name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    }).map((label:TrelloAPIModels.LabelModel)=>{
      return label.color;
    }); 
    this.devStatus = new ChartModels.DoughnutChartModel(labels, numbers,colors, new ChartModels.LegendModel('bottom'));
  }

}
