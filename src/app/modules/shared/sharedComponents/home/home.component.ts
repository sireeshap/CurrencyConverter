import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Observable, lastValueFrom ,Subject, combineLatest, tap, concatMap} from "rxjs";
import { APIService } from "src/app/services/api.service";
import {CURRENCY_OBJ,CURRENTVALUE_PAYLOAD} from '@app/configs'
import { DataShareService } from "src/app/services/data-share.service";
import { SYMBOLS } from "@app/configs";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnChanges{
  @Input() details:any={};
  currencyObj: CURRENCY_OBJ = {
    currency: 1,
    fromCurrency: "EUR",
    toCurrency: "USD",
  };
  symbolsLisDetails:any=SYMBOLS;
  otherConvertionsList:any=[];
  symbolsList: any = [];
  randomList:any=[];
  convertedResult: any = {};
  currentConverionValue: any = new Subject();
  currentConverionRate: any = new Subject();
  showDetails:boolean=false;
  constructor(private APIService: APIService, private dataShareService:DataShareService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.details){
      if(changes.details.currentValue != changes.details.previousValue){
        this.showDetails = true;
        this.currencyObj.fromCurrency = changes.details.currentValue.from;
        this.currencyObj.toCurrency = changes.details.currentValue.to;
      }
    }
  }
   ngOnInit() {
    this.concatMapProcess();
    
    this.Convert(this.currencyObj.fromCurrency, this.currencyObj.toCurrency, this.currencyObj.currency as any as string).then((responce:any)=>{
      this.convertedResult= responce
    })
   this.getCurrentConvertionRate();
  }
  concatMapProcess(){
    this.getSymbols().then((symbolList:any)=>{
      this.generateUnique().then((uniqueList:any)=>{
        this.getOtherConverstions(uniqueList)
      })
    })
  }
  async getCurrentConvertionRate(){
    this.currentConverionValue = await this.getCurrentValue();
    this.currentConverionValue.subscribe((info: any) => {
      if (info.rates) {
        this.currentConverionRate =
          '1.00' +
          this.currencyObj.fromCurrency +
          '=' +
          info.rates[this.currencyObj.toCurrency] +
          this.currencyObj.toCurrency;
      }
    });
  }
  async getSymbols() {
    let symbolsResult = await lastValueFrom(this.APIService.getSymbols())
    this.symbolsLisDetails = symbolsResult.symbols? symbolsResult.symbols: SYMBOLS
    this.dataShareService.setSymbolList(this.symbolsLisDetails);
      this.symbolsList = Object.keys(this.symbolsLisDetails);
    return this.symbolsList
  }
  swapCurrency() {
    let temp = this.currencyObj.fromCurrency;
    this.currencyObj.fromCurrency = this.currencyObj.toCurrency;
    this.currencyObj.toCurrency = temp;
  }
  onChange(event:any){
    this.getCurrentConvertionRate();
  }
  async generateUnique(){
    this.randomList=[];
    let i=0;
    let unique=new Set<string>()
  while(i<10 && this.symbolsList.length>0){
    let x=await Math.floor(Math.random() * this.symbolsList.length);
      if(!unique.has(this.symbolsList[x])){
        unique.add(this.symbolsList[x])
      }
    i++
  }
  return unique
  }
  async Convert(from:string, to:string, currency:string) {
    let query= {
      "from": from,
      "to": to,
      "amount": currency
  }
    let result = await lastValueFrom(this.APIService.convertCurrency(query))
    return result
  }
  getOtherConverstions(unique:any) {
    this.otherConvertionsList=[];
    
    unique.forEach((element:any) => {
      let query= {
        "from": this.currencyObj.fromCurrency,
        "to": element,
        "amount": this.currencyObj.currency
    }
      this.APIService.convertCurrency(query)
      .subscribe((info: any) => {
        if (info) {
          this.otherConvertionsList.push(info);
        }
      });
    });
    
  }
  ConvertInput(){
    this.Convert(this.currencyObj.fromCurrency, this.currencyObj.toCurrency, this.currencyObj.currency as any as string).then((responce:any)=>{
      this.convertedResult= responce;
      // this.generateUnique().then((responce:any)=>{
      //   this.getOtherConverstions(responce);
      // });
      
    })
     }
  getCurrentValue(): Observable<any> {
    let payload:CURRENTVALUE_PAYLOAD = {
      currencies:this.currencyObj.toCurrency,
      source: this.currencyObj.fromCurrency
    }
    return this.APIService.getCurrentConversionRate(payload);
  }
  moreDeatils(){
   this.showDetails=true;
   
  }
  getFullName(){
return this.currencyObj.fromCurrency+':'+ this.symbolsLisDetails[this.currencyObj.fromCurrency]
  }
}
