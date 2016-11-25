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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var index_component_1 = require('./Components/index.component');
var dashboard_component_1 = require('./Components/dashboard.component');
var app_component_1 = require('./Components/app.component');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var doughnutChart_component_1 = require('./Components/Charts/doughnutChart.component');
var barChart_component_1 = require('./Components/Charts/barChart.component');
var app_routes_1 = require('./app.routes');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_charts_1.ChartsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routes_1.AppRoutes), forms_1.FormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            declarations: [index_component_1.IndexComponent, doughnutChart_component_1.DoughnutChartComponent, app_component_1.AppComponent, dashboard_component_1.DashBoardComponent, barChart_component_1.BarChartComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map