import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  public data = new BehaviorSubject<any>(undefined);


  constructor() { }

  setData(value:any){
    this.data.next(value);
  }
  getData(){
return this.data.asObservable();
  }
}
