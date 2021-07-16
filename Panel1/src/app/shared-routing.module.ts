import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
;

export const moduleRoutes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
