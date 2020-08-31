import { Component, OnInit } from '@angular/core';
import { SendMessageService } from 'app/@core/services/send-message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  constructor(private _sendMessage: SendMessageService) { }

  ngOnInit() {
  }

  rename(){
    this._sendMessage.nombre$.emit('Pablo López'); // Emit para el evento a emitir
  }

}
