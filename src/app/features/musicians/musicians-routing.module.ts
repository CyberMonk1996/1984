import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MusiciansMainComponent } from "./musicians-main/musicians-main.component";
import { PersonalPageComponent } from "./personal-page/personal-page.component";

export const routes: Routes = [
  {
    path: "", component: MusiciansMainComponent
  },
  {
    path: ":name", component: PersonalPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusiciansRoutingModule {}
