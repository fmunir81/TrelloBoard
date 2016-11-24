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
var ChartModels = require("../Models/ChartModels");
var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.devStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Dev',], [350, 450], new ChartModels.LegendModel('bottom'));
        this.testingStatus = new ChartModels.DoughnutChartModel(['Impeded', 'In Test',], [350, 40], new ChartModels.LegendModel('bottom'));
        this.refinementStatus = new ChartModels.DoughnutChartModel(['Refined', 'In Test',], [350, 40], new ChartModels.LegendModel('bottom'));
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'trello-app',
            templateUrl: './app/Views/Index.html',
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map