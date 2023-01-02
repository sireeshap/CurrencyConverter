import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-other-conversions',
  templateUrl: './other-conversions.component.html',
  styleUrls: ['./other-conversions.component.scss']
})
export class OtherConversionsComponent implements OnInit,OnChanges{
@Input() currencyObj= {};
@Input() randomList=[];
ngOnChanges(changes: SimpleChanges): void {
  if(changes.currencyObj){
    this.currencyObj = changes.currencyObj.currentValue;
  }
  if(changes.currencyObj){
    this.randomList = changes.randomList.currentValue;
  }
}
  constructor(){     

  }
  ngOnInit(): void {
    console.log(this.randomList)
  }
  processString(obj:any){
    let display = obj?.query?.amount +' '+obj?.query?.from+ ' = '+ obj?.result+' '+obj?.query?.to
    return display
  }
}
