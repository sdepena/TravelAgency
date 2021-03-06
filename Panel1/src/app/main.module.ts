import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { environment } from "./../environments/environment";
import { ServiceWorkerModule } from "@angular/service-worker";

import { CommonModule as GxCommonModule } from "./common.module";
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { Panel1_Level_DetailComponent } from "app/Panel1/panel1_level_detail.component" ;

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    GxCommonModule,
    VirtualScrollerModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  declarations: [
    Panel1_Level_DetailComponent   
  ],
  exports: [
    Panel1_Level_DetailComponent   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {
}
