import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {mergeMap, delay, retryWhen} from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';
export const maxRetries = 2;
export const delayMs = 2000;

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor  {
constructor(private NotificationService:NotificationService){}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retryWhen((error) => 
        error.pipe(
          mergeMap((error, index) => {
            console.log("GGGGGG")
            console.log(error)
            this.NotificationService.showError('Code :'+ error.status+ ' - '+error.error.message  , "ERROR")
            throw error;
          })
        )
      )
    )
  }
}
