"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ChartModels_1 = require("../Models/ChartModels");
var trello_Service_1 = require('../Services/trello.Service');
var HomeComponent = (function () {
    //boards : Tre
    function HomeComponent(_trelloService) {
        this._trelloService = _trelloService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //  this._trelloService.getUserBoards()
        //  .subscribe(p => this.people = p)
        this.personModel = this._trelloService.getAll();
        this.personModel = this._trelloService.getAll();
        this.devStatus = new ChartModels_1.ChartModels.DoughnutChartModel(['Impeded', 'In Dev',], [350, 450], new ChartModels_1.ChartModels.LegendModel('bottom'));
        this.testingStatus = new ChartModels_1.ChartModels.DoughnutChartModel(['Impeded', 'In Test',], [350, 40], new ChartModels_1.ChartModels.LegendModel('bottom'));
        this.refinementStatus = new ChartModels_1.ChartModels.DoughnutChartModel(['Refined', 'In Test',], [350, 40], new ChartModels_1.ChartModels.LegendModel('bottom'));
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'trello-app',
            templateUrl: './app/Views/Home.html',
            providers: [trello_Service_1.TrelloAPI]
        }), 
        __metadata('design:paramtypes', [trello_Service_1.TrelloAPI])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map