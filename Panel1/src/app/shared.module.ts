import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CommonModule as GxCommonModule } from "./common.module";
import { MainModule } from "./main.module";

import { SafePipe } from "app/gx/ui/controls/safe-pipe/safe-pipe.component";
;
;

import { SharedRoutingModule, moduleRoutes } from "app/shared-routing.module";

import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    SharedRoutingModule, 
    VirtualScrollerModule,
    GxCommonModule,
    MainModule
  ],
  declarations: [
    SafePipe, 
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static routes = moduleRoutes;
}
