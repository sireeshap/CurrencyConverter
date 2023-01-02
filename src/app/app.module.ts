import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataShareService } from "./services/data-share.service";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { EurToUsdComponent } from "./components/eur-to-usd/eur-to-usd.component";
import { HttpInterceptorService } from "./interceptors/http-interceptor.service";
import { ErrorInterceptorService } from "./interceptors/error-interceptor.service";
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from "./services/notification.service";
@NgModule({
  declarations: [AppComponent, NavBarComponent, EurToUsdComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    DataShareService,
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
