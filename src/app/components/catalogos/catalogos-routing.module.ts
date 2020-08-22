import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogosComponent } from './catalogos.component';

const routes: Routes = [
  {
    path: '',
     component: CatalogosComponent,
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
