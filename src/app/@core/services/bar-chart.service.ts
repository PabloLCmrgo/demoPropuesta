import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { IBarChart } from '../../@core/interfaces/ibar-chart';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {
  private barChartSubject = new BehaviorSubject([]);
  private bar: IBarChart[];
  constructor() { }

  getBarChart(): Observable<IBarChart[]> {
    return this.barChartSubject.asObservable();
  }

  private refresh(){
    // Emitir los nuevos valores para que todos los que dependan se actualicen
    this.barChartSubject.next(this.bar);
  }
}
