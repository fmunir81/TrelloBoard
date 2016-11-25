
  //dfsjhfdkjshfkdsh
  export class DoughnutChartModel {
    public ChartLabels: string[];
    public ChartData: number[];
    public Legend: LegendModel;
    private _chartType: string = 'doughnut';
    get ChartType(): string {
      return this._chartType;
    }
    constructor(chartLabels: string[], labelsData: number[], legendoptions: LegendModel) {
      this.ChartLabels = chartLabels;
      this.ChartData = labelsData;
      this.Legend = legendoptions;
    }
  }
  export class LegendModel {
    constructor(public position: string) {
    }
  }