import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablasComponent } from './tablas.component';

const routes: Routes = [
  {
    path: '',
     component: TablasComponent,
    data: {
      title: 'Tablas'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasRoutingModule { }
