import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LiveComponent } from "./lives.component";

export const routes: Routes = [
  {
    path: "", component: LiveComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveRoutingModule{};
