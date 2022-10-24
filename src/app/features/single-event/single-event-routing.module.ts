import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SingleEventComponent } from "./single-event.component";
export const routes: Routes = [
  {
    path: "", component: SingleEventComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleEventRoutingModule{};
