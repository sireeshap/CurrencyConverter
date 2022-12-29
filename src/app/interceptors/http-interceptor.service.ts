import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(environment.API_KEY){
      //let tokenizedReq = req.clone({ params: req.params.set('access_key',environment.API_KEY) });
      //let tokenizedReq2 = tokenizedReq.clone({ headers: req.headers.set('apikey',environment.API_KEY) });

      let tokenizedReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin','*') });
      let tokenizedReq2 = tokenizedReq.clone({ headers: req.headers.set('apikey',environment.API_KEY) });
      return next.handle(tokenizedReq2);
    }
    return next.handle(req);
  }
}
