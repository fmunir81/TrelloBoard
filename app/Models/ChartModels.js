"use strict";
//dfsjhfdkjshfkdsh
var DoughnutChartModel = (function () {
    function DoughnutChartModel(chartLabels, labelsData, legendoptions) {
        this._chartType = 'doughnut';
        this.ChartLabels = chartLabels;
        this.ChartData = labelsData;
        this.Legend = legendoptions;
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