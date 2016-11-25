

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
  public colors :string[] = ['rgba(148, 123, 0, 0.91)'];
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

  constructor(public data: number[],public label: string,public backgroundColor:string[],public borderColor:string[],public borderWidth :number){
  var colors = this.getRandomColor();
  this.backgroundColor= [
                colors[0]
            ];
            this.borderColor= [
                colors[1]
            ];
            this.borderWidth= 1;
  }
  private getRandomColor():string[]
  {
    var back = ["#22A7F0","#8E44AD","#AEA8D3","#F62459","#DB0A5B","#D64541","#D2527F","#2C3E50","#1E8BC3","#87D37C","#4ECDC4","#3FC380","#E87E04","#F9690E","#F9BF3B"];
    var rand1 = back[Math.floor(Math.random() * back.length)];
	  return [this.convertHex(rand1,50), this.convertHex(rand1,50)];
  }
  convertHex(hex,opacity){
		    hex = hex.replace('#','');
		    var r = parseInt(hex.substring(0,2), 16);
		    var g = parseInt(hex.substring(2,4), 16);
		    var b = parseInt(hex.substring(4,6), 16);
			
			// Add Opacity to RGB to obtain RGBA
		    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
		    return result;
		}
}

