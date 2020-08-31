import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { barChartDataSimple } from '../../../../@core/mock/ngx-charts/dataBarSimpleMulti';
import { GenerateBarChartService } from 'app/@core/services/generate-bar-chart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-ngx-charts-factory',
  templateUrl: './ngx-charts-factory.component.html',
  styleUrls: ['./ngx-charts-factory.component.scss']
})
export class NgxChartsFactoryComponent implements AfterContentInit, OnDestroy {
  public ObservableBarChart: Subscription;
  public barChartData: any[];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public _barChartService: GenerateBarChartService) {
    Object.assign(this, { barChartDataSimple })
  }

  onSelect(event) {
    console.log(event);
  }

  ngAfterContentInit() {
    this.ObservableBarChart = this._barChartService.BarchartData$.subscribe(chartData => {
      console.log(chartData);
    })
  }

  ngOnDestroy() {
    this.ObservableBarChart.unsubscribe();
  }
}
