import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendMessageComponent } from '../observables/send-message/send-message.component';

const routes: Routes = [
  {
    path:'',
    data: {
      title: 'Observables'
    },
    children: [
      {
        path: 'send-message',
        component: SendMessageComponent,
        data: {
          title: 'Enviar Mensaje'
        }
      }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
