import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ObservablesRoutingModule } from './observables-routing.module';
import { SendMessageComponent } from './send-message/send-message.component';
import { SonComponent } from './send-message/son/son.component';

@NgModule({
  declarations: [SendMessageComponent, SonComponent],
  imports: [
    CommonModule,
    ObservablesRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [SendMessageComponent, SonComponent]
})
export class ObservablesModule { }
