import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class DataShareService {
  public data = new BehaviorSubject<any>(undefined);
  public SymbolsList = new BehaviorSubject<any>(undefined);

  constructor() {}
  setSymbolList(value: any) {
    this.SymbolsList.next(value);
  }
  getSymbolList() {
    return this.SymbolsList.asObservable();
  }
  setData(value: any) {
    this.data.next(value);
  }
  getData() {
    return this.data.asObservable();
  }
}
