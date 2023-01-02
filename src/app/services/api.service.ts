import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { of } from "rxjs";
import { catchError, map, take } from "rxjs/operators";
import { CURRENCY_OBJ, CURRENTVALUE_PAYLOAD } from "@app/configs";

/*Observed that URLs end points are changing very often from
 provider to provider. But payload is same, such case this one
  place change will reduce regression*/
const URLS = {
  symbolsList: "symbols",
  convert: "convert",
  latest: "latest",
};
@Injectable({
  providedIn: "root",
})
export class APIService {
  remoteURL: string = environment.API_PATH;
  constructor(private httpClient: HttpClient) {}
  getSymbols() {
    return this.httpClient.get(this.remoteURL + URLS.symbolsList).pipe(
      take(1),
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }
  convertCurrency(payload: any) {
    let params = new HttpParams({ fromObject: payload });
    return this.httpClient
      .get(this.remoteURL + URLS.convert, { params: params })
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

  getCurrentConversionRate(payload: any) {
    let params = new HttpParams({ fromObject: payload });

    return this.httpClient
      .get(this.remoteURL + URLS.latest, { params: params })
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
