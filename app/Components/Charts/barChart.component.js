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
var BarChartComponent = (function () {
    function BarChartComponent() {
        this.isParent = false;
    }
    BarChartComponent.prototype.chartClicked = function (e) {
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild('barChartModal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], BarChartComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BarChartComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BarChartComponent.prototype, "isParent", void 0);
    BarChartComponent = __decorate([
        core_1.Component({
            selector: 'bar-chart',
            templateUrl: './app/Views/Charts/barChart.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BarChartComponent);
    return BarChartComponent;
}());
exports.BarChartComponent = BarChartComponent;
//# sourceMappingURL=barChart.component.js.map