import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule,Http } from '@angular/http';
import { HomeComponent }   from './Components/home.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { CounterComponent } from './Components/Counter.component';
//import { TestComponent } from './Components/test.component';
import { DoughnutChartComponent } from './Components/Charts/doughnutChart.component'
@NgModule({
  imports:      [ BrowserModule, ChartsModule,HttpModule ],
  declarations: [ HomeComponent,DoughnutChartComponent ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { 

}