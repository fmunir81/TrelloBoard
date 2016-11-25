

export class DoughnutChartModel {
  public ChartLabels: string[];
  public ChartData: number[];
  public Legend: LegendModel;
  private _chartType: string = 'doughnut';
  get ChartType(): string {
    return this._chartType;
  }
  private _chartColors: any[] = [{ backgroundColor: ["#000000", "#00d9f9", "#a4c73c", "#a4add3"] }];
  get ChartColors(): any[] {
    return this._chartColors;
  }
  constructor(chartLabels: string[], labelsData: number[], chartColors: string[], legendoptions: LegendModel) {
    this.ChartLabels = chartLabels;
    this.ChartData = labelsData;
    this.Legend = legendoptions;
    this._chartColors = [{ backgroundColor: chartColors }];
  }
}
export class LegendModel {
  constructor(public position: string) {
  }
}
export class BarChartModel {
  public BarChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  private _chartType: string = 'bar';
  get ChartType(): string {
    return this._chartType;
  }
  constructor(public BarChartLabels: string[], public BarChartLegend: boolean, public BarChartData: BarChartDataModel[], showVerticalLines: boolean, responsive: boolean) {
    this.BarChartOptions.scaleShowVerticalLines = showVerticalLines;
    this.BarChartOptions.responsive = responsive;
  }
}
export class BarChartDataModel {

  constructor(public data: number[],public label: string){
 
  }
}

