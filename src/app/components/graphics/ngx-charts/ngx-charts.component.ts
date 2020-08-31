import { Component, OnInit, AfterContentInit } from '@angular/core';
import { GenerateBarChartService } from 'app/@core/services/generate-bar-chart.service';
import { barChartDataSimple } from '../../../@core/mock/ngx-charts/dataBarSimpleMulti';

@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class NgxChartsComponent implements OnInit, AfterContentInit {

  constructor(public _barChartService: GenerateBarChartService) { }

  ngOnInit() {
    this.sendBarChartData();
  }

  sendBarChartData(){
    this._barChartService.BarchartData$.emit(barChartDataSimple);
  }
  
  ngAfterContentInit(){
  }
}
