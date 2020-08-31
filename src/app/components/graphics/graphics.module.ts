import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';

import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { NgxChartsFactoryComponent } from '../../components/graphics/graphicsfactory/ngx-charts/ngx-charts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NgxChartsComponent, NgxChartsFactoryComponent],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgxChartsModule,
    RouterModule
  ],
  exports:[NgxChartsFactoryComponent]
})
export class GraphicsModule { }
