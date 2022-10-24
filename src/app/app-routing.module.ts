import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: "home",
    loadChildren: () =>
      import("./features/main-page/main-page.module").then((mod) => mod.MainPageModule),
  },
  {
    path: "events/:day",
    loadChildren: () =>
      import("./features/single-event/single-event.module").then((mod) => mod.SingleEventModule),
  },
  {
    path: "musicians",
    loadChildren: () =>
      import("./features/musicians/musicians.module").then((mod) => mod.MusiciansModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
