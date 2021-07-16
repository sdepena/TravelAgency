import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Panel1_Level_DetailComponent } from "app/Panel1/panel1_level_detail.component" ;

export const moduleRoutes: Routes = [
  {path:"", redirectTo: "Panel1-Level_Detail", pathMatch: 'full'},

  { path: "Panel1-Level_Detail", component: Panel1_Level_DetailComponent } ,
  {
    path: "app",
    loadChildren: () => import("./shared.module").then(mod => mod.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(moduleRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }