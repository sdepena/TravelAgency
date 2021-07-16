import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from 'ngx-cookie-service';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { CommonModule as GxCommonModule } from "./common.module";
import { MainModule } from "./main.module";

import { MessagesComponent } from "app/gx/ui/controls/messages/messages.component";
import { ProgressComponent } from "app/gx/ui/controls/progress/progress.component";
import { TimerComponent } from "app/gx/ui/controls/timer/timer.component";
import { ActionGroupComponent } from "app/gx/ui/controls/action-group/action-group.component";
import { AuthInterceptor } from "app/gx/auth/auth-interceptor";

import { VisibilityService } from "app/gx/base/visibility.service";

import { AppRoutingModule } from "app/app.routing";
import { AppComponent } from "app/app.component";
import { AppHome } from 'app/app-home.component';

import { environment } from "./../environments/environment";
import { AppBarService } from "./gx/base/app-bar.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    GxCommonModule,
    MainModule,
    VirtualScrollerModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  declarations: [
    AppComponent,
    AppHome,
    MessagesComponent,
    ProgressComponent,
    TimerComponent,
    ActionGroupComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CookieService,
    VisibilityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AppBarService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
