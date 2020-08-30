import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveForms } from './reactiveForms/reactiveforms.component';

const routes: Routes = [
  {
    path: '',
     component: ReactiveForms,
    data: {
      title: 'Catalogos'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
