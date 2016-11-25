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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var DoughnutChartComponent = (function () {
    function DoughnutChartComponent() {
        this.isParent = false;
    }
    DoughnutChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild('myModal3'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], DoughnutChartComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DoughnutChartComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DoughnutChartComponent.prototype, "isParent", void 0);
    DoughnutChartComponent = __decorate([
        core_1.Component({
            selector: 'doughnut-chart',
            templateUrl: './app/Views/Charts/doughnutChart.html',
            styles: ['>>> .modal-xl { width: 1100px; }'],
        }), 
        __metadata('design:paramtypes', [])
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());
exports.DoughnutChartComponent = DoughnutChartComponent;
//# sourceMappingURL=doughnutChart.component.js.map