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
/// < reference path="../Models/ChartModels.ts" />
var core_1 = require('@angular/core');
var ChartModels = require("../Models/ChartModels");
var trello_Service_1 = require('../Services/trello.Service');
var DashBoardComponent = (function () {
    function DashBoardComponent(_trelloService) {
        this._trelloService = _trelloService;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._trelloService.getUserBoards()
            .subscribe(function (p) { return _this.boards = p; });
        this.devStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Dev',], [350, 450], new ChartModels.LegendModel('bottom'));
        this.testingStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Test',], [350, 40], new ChartModels.LegendModel('bottom'));
        this.refinementStatus = new ChartModels.DoughnutChartModel(['Refined', 'In Test',], [350, 40], new ChartModels.LegendModel('bottom'));
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: 'trello-app',
            templateUrl: './app/Views/dashboard.html',
            providers: [trello_Service_1.TrelloAPI]
        }), 
        __metadata('design:paramtypes', [trello_Service_1.TrelloAPI])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map