"use strict";
var DoughnutChartModel = (function () {
    function DoughnutChartModel(chartLabels, labelsData, chartColors, legendoptions) {
        this._chartType = 'doughnut';
        this._chartColors = [{ backgroundColor: ["#000000", "#00d9f9", "#a4c73c", "#a4add3"] }];
        this.ChartLabels = chartLabels;
        this.ChartData = labelsData;
        this.Legend = legendoptions;
        this._chartColors = [{ backgroundColor: chartColors }];
    }
    Object.defineProperty(DoughnutChartModel.prototype, "ChartType", {
        get: function () {
            return this._chartType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartModel.prototype, "ChartColors", {
        get: function () {
            return this._chartColors;
        },
        enumerable: true,
        configurable: true
    });
    return DoughnutChartModel;
}());
exports.DoughnutChartModel = DoughnutChartModel;
var LegendModel = (function () {
    function LegendModel(position) {
        this.position = position;
    }
    return LegendModel;
}());
exports.LegendModel = LegendModel;
var BarChartModel = (function () {
    function BarChartModel(BarChartLabels, BarChartLegend, BarChartData, showVerticalLines, responsive) {
        this.BarChartLabels = BarChartLabels;
        this.BarChartLegend = BarChartLegend;
        this.BarChartData = BarChartData;
        this.BarChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this._chartType = 'bar';
        this.BarChartOptions.scaleShowVerticalLines = showVerticalLines;
        this.BarChartOptions.responsive = responsive;
    }
    Object.defineProperty(BarChartModel.prototype, "ChartType", {
        get: function () {
            return this._chartType;
        },
        enumerable: true,
        configurable: true
    });
    return BarChartModel;
}());
exports.BarChartModel = BarChartModel;
var BarChartDataModel = (function () {
    function BarChartDataModel(data, label) {
        this.data = data;
        this.label = label;
    }
    return BarChartDataModel;
}());
exports.BarChartDataModel = BarChartDataModel;
//# sourceMappingURL=ChartModels.js.map