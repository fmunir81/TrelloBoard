
  //dfsjhfdkjshfkdsh
  export class DoughnutChartModel {
    public ChartLabels: string[];
    public ChartData: number[];
    public ChartColors: string[];
    public Legend: LegendModel;
    private _chartType: string = 'doughnut';
    get ChartType(): string {
      return this._chartType;
    }
    constructor(chartLabels: string[], labelsData: number[],chartColors:string[], legendoptions: LegendModel) {
      this.ChartLabels = chartLabels;
      this.ChartData = labelsData;
      this.Legend = legendoptions;
      this.ChartColors = chartColors;
    }
  }
  export class LegendModel {
    constructor(public position: string) {
    }
  }