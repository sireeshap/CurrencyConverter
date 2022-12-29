import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataShareService } from './services/data-share.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test';
  localData:any=[];
  constructor(private http: HttpClient, private dataShareService:DataShareService){

  }
ngOnInit(): void {
this.dataShareService.setData(this.localData);
}
}
