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
        this.colors = ['rgba(148, 123, 0, 0.91)'];
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
    function BarChartDataModel(data, label, backgroundColor, borderColor, borderWidth) {
        this.data = data;
        this.label = label;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
        var colors = this.getRandomColor();
        this.backgroundColor = [
            colors[0]
        ];
        this.borderColor = [
            colors[1]
        ];
        this.borderWidth = 1;
    }
    BarChartDataModel.prototype.getRandomColor = function () {
        var back = ["#22A7F0", "#8E44AD", "#AEA8D3", "#F62459", "#DB0A5B", "#D64541", "#D2527F", "#2C3E50", "#1E8BC3", "#87D37C", "#4ECDC4", "#3FC380", "#E87E04", "#F9690E", "#F9BF3B"];
        var rand1 = back[Math.floor(Math.random() * back.length)];
        return [this.convertHex(rand1, 50), this.convertHex(rand1, 50)];
    };
    BarChartDataModel.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        // Add Opacity to RGB to obtain RGBA
        var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;
    };
    return BarChartDataModel;
}());
exports.BarChartDataModel = BarChartDataModel;
//# sourceMappingURL=ChartModels.js.map