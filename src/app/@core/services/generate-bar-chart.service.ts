import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateBarChartService {

  BarchartData$ = new EventEmitter<any>(); // Va a emitir strings
  constructor() { }
}
