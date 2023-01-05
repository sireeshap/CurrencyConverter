import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { DataShareService } from 'src/app/services/data-share.service';
import { APIService } from 'src/app/services/api.service';
import { SYMBOLS } from '@app/configs';
@Component({
  selector: 'app-eur-to-usd',
  templateUrl: './eur-to-usd.component.html',
  styleUrls: ['./eur-to-usd.component.scss']
})
export class EurToUsdComponent implements OnInit {
  currentCombination!: string;
  detaillsCurrencyObj:any={
   from:'EUR',
   to:'USD'
   }
   symbolList:any=SYMBOLS;
  
   isDeatials:boolean = true;
   constructor(private actRoute: ActivatedRoute, private dataShareService:DataShareService, private APIService:APIService) {
    this.dataShareService.getSymbolList().subscribe((data:any)=>{
      if(data){
        this.symbolList = data;
      }
    })
   }
 
   async ngOnInit(): Promise<void> {
     this.actRoute.paramMap.subscribe(async (params) => {
       this.currentCombination = params.get('id')!;
       if(this.currentCombination){
         let arr= this.currentCombination.replace(/\s/g, "").split('-');
         if(await this.checkExistitence(arr)){
          this.detaillsCurrencyObj= {
            from:arr[0],
            to:arr[1]
            }
         } 
       }
     });
   }
   async checkExistitence(arr: string[]) {
    let valid:boolean = false;
    let list =Object.keys(this.symbolList)
    if(list.length==0){
    await this.getSymbols()

      let list =Object.keys(this.symbolList)
      if(list.length>0 &&list.includes(arr[0]) && list.includes(arr[0])){
        valid = true;
        return valid
      }
    }
    else{
      if(list.length>0 &&list.includes(arr[0]) && list.includes(arr[0])){
        valid = true;
      }
    }
    return valid
  }
 async getSymbols() {
    let symbolsResult = await lastValueFrom(this.APIService.getSymbols())
    this.symbolList = symbolsResult.currencies
    return this.symbolList
  }
}
