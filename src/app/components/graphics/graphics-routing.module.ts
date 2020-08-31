import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';

const routes: Routes = [
  {
    path:'',
    data: {
      title: 'Graficos'
    },
    children: [
      {
        path: 'ngx-charts',
        component: NgxChartsComponent,
        data: {
          title: 'ngxCharts'
        }
      }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
