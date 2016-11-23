import { Component, Directive, OnInit } from '@angular/core';
import { ChartModels } from "../Models/ChartModels";
import { TrelloAPI } from '../Services/trello.Service';
import { PersonModel } from '../Models/PersonModel';

@Component({
  selector: 'trello-app',
  templateUrl: './app/Views/Home.html',
  providers: [TrelloAPI]
})
export class HomeComponent {

  private personModel: PersonModel[];
  devStatus: ChartModels.DoughnutChartModel;
  testingStatus: ChartModels.DoughnutChartModel;
  refinementStatus: ChartModels.DoughnutChartModel;
  //boards : Tre
  constructor(private _trelloService: TrelloAPI) {
    
  }
  ngOnInit() {

   //  this._trelloService.getUserBoards()
    //  .subscribe(p => this.people = p)

    this.personModel = this._trelloService.getAll();
    this.personModel = this._trelloService.getAll();
    this.devStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Dev',], [350, 450], new ChartModels.LegendModel('bottom'));
    this.testingStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Test',], [350, 40], new ChartModels.LegendModel('bottom'));
    this.refinementStatus = new ChartModels.DoughnutChartModel(['Refined', 'In Test',], [350, 40], new ChartModels.LegendModel('bottom'));

  }

}
