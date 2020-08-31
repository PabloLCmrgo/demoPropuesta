import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  nombre$ = new EventEmitter<string>(); // Va a emitir strings
  constructor() { }

  
}
