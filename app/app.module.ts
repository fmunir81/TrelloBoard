import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule,Http } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { IndexComponent }   from './Components/index.component';
import { DashBoardComponent }   from './Components/dashboard.component';
import {AppComponent} from './Components/app.component'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DoughnutChartComponent } from './Components/Charts/doughnutChart.component'
import { BarChartComponent } from './Components/Charts/barChart.component'
import { AppRoutes } from './app.routes'
@NgModule({
  imports:      [ BrowserModule, ChartsModule,HttpModule,RouterModule.forRoot(AppRoutes),FormsModule ],
  declarations: [ IndexComponent,DoughnutChartComponent,AppComponent,DashBoardComponent,BarChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}