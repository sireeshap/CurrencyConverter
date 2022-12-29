import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs";
//import {CURRENCY_OBJ} from '@app/types'
import { APIService } from "src/app/services/api.service";
export interface CURRENCY_OBJ {
  currency: Number;
  fromCurrency: string;
  toCurrency: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  currencyObj: CURRENCY_OBJ = {
    currency: 1,
    fromCurrency: "EUR",
    toCurrency: "USD",
  };
  symbolsList: any = [];
  randomList:any=[];
  convertedResult: any = {};
  currentConverionValue: any = new Subject();
  currentConverionRate: any = new Subject();
  constructor(private APIService: APIService) {}
  async ngOnInit() {
    this.getSymbols();
    this.Convert();
    this.currentConverionValue = await this.getCurrentValue();
    this.currentConverionValue.subscribe((info: any) => {
      if (info.rates) {
        this.currentConverionRate =
          "1.00" +
          this.currencyObj.fromCurrency +
          "=" +
          info.rates[this.currencyObj.toCurrency] +
          this.currencyObj.toCurrency;
      }
    });
  }
  getSymbols() {
    this.APIService.getSymbols().subscribe((info: any) => {
      if (info.symbols) {
        this.symbolsList = Object.keys(info.symbols);
      }
    });
  }
  swapCurrency() {
    let temp = this.currencyObj.fromCurrency;
    this.currencyObj.fromCurrency = this.currencyObj.toCurrency;
    this.currencyObj.toCurrency = temp;
  }
  Convert() {
    this.APIService.convertCurrency(this.currencyObj).subscribe((info: any) => {
      if (info.result) {
        this.convertedResult = info;
      }
    });
    this.generateRandomConversion();
  }
  generateRandomConversion() {
    this.randomList =[]
    while (this.randomList.length < 10) {
      var r = Math.floor(Math.random() * 100) + 1;
      
      if (this.randomList.indexOf(this.symbolsList[r]) === -1 && this.randomList[this.randomList.indexOf(r)]!=this.currencyObj.fromCurrency) {
      this.randomList.push(this.symbolsList[r]);
    }
    }
  }
  getCurrentValue(): Observable<any> {
    return this.APIService.getCurrentConversionRate(
      this.currencyObj.fromCurrency,
      this.currencyObj.toCurrency
    );
  }
}
