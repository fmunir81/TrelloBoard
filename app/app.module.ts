import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule,Http } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { IndexComponent }   from './Components/index.component';
import { DashBoardComponent }   from './Components/dashboard.component';
import {AppComponent} from './Components/app.component'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DoughnutChartComponent } from './Components/Charts/doughnutChart.component'
import { AppRoutes } from './app.routes'
@NgModule({
  imports:      [ BrowserModule, ChartsModule,HttpModule,RouterModule.forRoot(AppRoutes) ],
  declarations: [ IndexComponent,DoughnutChartComponent,AppComponent,DashBoardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}