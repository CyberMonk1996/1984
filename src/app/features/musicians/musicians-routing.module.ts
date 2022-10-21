import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MusiciansMainComponent } from "./musicians-main/musicians-main.component";

export const routes: Routes = [
  {
    path: "", component: MusiciansMainComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
