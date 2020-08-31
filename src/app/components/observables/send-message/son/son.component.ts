import { Component, OnInit, OnDestroy } from '@angular/core';
import { SendMessageService } from 'app/@core/services/send-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit, OnDestroy {

  public message: string = 'Mensaje!';
  public messageUnsuscription: Subscription;
  constructor(public _sendMessage: SendMessageService) { }

  ngOnInit() {
  this.messageUnsuscription = this._sendMessage.nombre$.subscribe(txt => {
      console.log(txt);
      this.message = txt;
    });
  }

  ngOnDestroy() {
    this.messageUnsuscription.unsubscribe();
  }

}
