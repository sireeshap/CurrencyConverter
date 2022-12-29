import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-conversions',
  templateUrl: './other-conversions.component.html',
  styleUrls: ['./other-conversions.component.scss']
})
export class OtherConversionsComponent implements OnInit{
@Input() currencyObj= {};
@Input() randomList={};

  constructor(){

  }
  ngOnInit(): void {
    console.log(this.randomList)
  }
}
