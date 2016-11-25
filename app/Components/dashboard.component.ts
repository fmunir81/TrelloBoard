/// < reference path="../Models/ChartModels.ts" />
import { Component, Directive, OnInit } from '@angular/core';
import  * as ChartModels  from "../Models/ChartModels";
import { TrelloAPI } from '../Services/trello.Service';
import * as TrelloAPIModels from '../Models/TrelloAPIModels';
import { ActivatedRoute,Router,Params } from '@angular/router'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
  selector: 'trello-app',
  templateUrl: './app/Views/dashboard.html',
  providers: [TrelloAPI]
})
export class DashBoardComponent {
  ifCards: ChartModels.DoughnutChartModel=new ChartModels.DoughnutChartModel([],[],[],new ChartModels.LegendModel('bottom'));
  listCardCounts: ChartModels.BarChartModel = new ChartModels.BarChartModel([""],true,[new ChartModels.BarChartDataModel([0],"")],false,true);

  boardId : string;
  constructor(private _trelloService: TrelloAPI, private route: ActivatedRoute,private router: Router) {
    
  }
  ngOnInit() {
    this.boardId = this.route.snapshot.params['id'];
    this._trelloService.getIFLabelsStats(this.boardId)
     .subscribe(p=>this.renderIFChart(p));
     this._trelloService.getListsCardsCount(this.boardId)
     .subscribe(p=>this.renderListBarChart(p));

  }
  renderIFChart(models:TrelloAPIModels.LabelModel[]){
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
    this.ifCards = new ChartModels.DoughnutChartModel(labels, numbers,colors, new ChartModels.LegendModel('bottom'));
  }
  renderListBarChart(models : TrelloAPIModels.ListCardsCountModel[]){
   var barChartData = models.map((list)=>{
     return new ChartModels.BarChartDataModel([list.CardCount],list.ListName);
   });
   this.listCardCounts =  new ChartModels.BarChartModel(["Lists"],true,barChartData,false,true);
  }
}
