import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficosComponent } from './graficos.component';

const routes: Routes = [
  {
    path: '',
     component: GraficosComponent,
    data: {
      title: 'Graficos'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficosRoutingModule { }
