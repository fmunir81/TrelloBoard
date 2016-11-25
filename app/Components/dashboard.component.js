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
var router_1 = require('@angular/router');
var DashBoardComponent = (function () {
    function DashBoardComponent(_trelloService, route, router) {
        this._trelloService = _trelloService;
        this.route = route;
        this.router = router;
        this.ifCards = new ChartModels.DoughnutChartModel([], [], [], new ChartModels.LegendModel('bottom'));
        this.listCardCounts = new ChartModels.BarChartModel([""], true, [new ChartModels.BarChartDataModel([0], "")], false, true);
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boardId = this.route.snapshot.params['id'];
        this.boardName = this.route.snapshot.params['name'];
        this._trelloService.getIFLabelsStats(this.boardId)
            .subscribe(function (p) { return _this.renderIFChart(p); });
        this._trelloService.getListsCardsCount(this.boardId)
            .subscribe(function (p) { return _this.renderListBarChart(p); });
        this._trelloService.getRecentComments(this.boardId)
            .subscribe(function (p) { return _this.comments = p; });
        this._trelloService.getRecentActions(this.boardId)
            .subscribe(function (p) { return _this.actions = p; });
    };
    DashBoardComponent.prototype.renderIFChart = function (models) {
        var labels = models.sort(function (a, b) {
            var textA = a.Name.toUpperCase();
            var textB = b.Name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }).map(function (label) {
            return label.Name;
        });
        var numbers = models.sort(function (a, b) {
            var textA = a.Name.toUpperCase();
            var textB = b.Name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }).map(function (label) {
            return label.uses;
        });
        var colors = models.sort(function (a, b) {
            var textA = a.Name.toUpperCase();
            var textB = b.Name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }).map(function (label) {
            return label.color;
        });
        this.ifCards = new ChartModels.DoughnutChartModel(labels, numbers, colors, new ChartModels.LegendModel('bottom'));
    };
    DashBoardComponent.prototype.renderListBarChart = function (models) {
        var barChartData = models.map(function (list) {
            return new ChartModels.BarChartDataModel([list.CardCount], list.ListName);
        });
        this.listCardCounts = new ChartModels.BarChartModel(["Lists"], true, barChartData, false, true);
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: 'trello-app',
            templateUrl: './app/Views/dashboard.html',
            providers: [trello_Service_1.TrelloAPI]
        }), 
        __metadata('design:paramtypes', [trello_Service_1.TrelloAPI, router_1.ActivatedRoute, router_1.Router])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map