"use strict";
//dfsjhfdkjshfkdsh
var DoughnutChartModel = (function () {
    function DoughnutChartModel(chartLabels, labelsData, chartColors, legendoptions) {
        this._chartType = 'doughnut';
        this.ChartLabels = chartLabels;
        this.ChartData = labelsData;
        this.Legend = legendoptions;
        this.ChartColors = chartColors;
    }
    Object.defineProperty(DoughnutChartModel.prototype, "ChartType", {
        get: function () {
            return this._chartType;
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
//# sourceMappingURL=ChartModels.js.map