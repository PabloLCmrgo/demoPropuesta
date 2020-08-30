import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasRoutingModule } from './tablas-routing.module';
import { TablasComponent } from './tablas.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [TablasComponent],
  imports: [
    CommonModule,
    TablasRoutingModule,
    MatTableModule
  ],
  exports:[MatTableModule]
})
export class TablasModule { }
