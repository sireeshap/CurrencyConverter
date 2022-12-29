import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { CURRENCY_OBJ } from './../components/home/home.component';
@Injectable({
  providedIn: 'root',
})
export class APIService {
  remoteURL: string = environment.API_PATH;
  constructor(private httpClient: HttpClient) {}
  getSymbols() {
    return this.httpClient.get(this.remoteURL + 'symbols').pipe(
      take(1),
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }
  convertCurrency(currencyObj: CURRENCY_OBJ) {
    let params = new HttpParams()
      .set('from', currencyObj.fromCurrency)
      .set('to', currencyObj.toCurrency)
      .set('amount', currencyObj.currency as unknown as string);
    return this.httpClient
      .get(this.remoteURL + 'convert', { params: params })
      .pipe(
        take(1),
        map((response: any) => {
          return response;
        }),
        catchError((error) => {
          return of(error);
        })
      );
  }
  getCurrentConversionRate(base: string, symbols: any) {
    let params = new HttpParams().set('symbols', symbols).set('base', base);
    return this.httpClient
      .get(this.remoteURL + 'latest', { params: params })
      .pipe(
        take(1),
        map((response: any) => {
          return response;
        }),
        catchError((error) => {
          return of(error);
        })
      );
  }
 
}
