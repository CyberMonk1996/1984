import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { ImagesComponent } from "./images/images.component";
import { VideosComponent } from './videos/videos.component';


export const routes: Routes = [
  {
    path: "", component: GalleryComponent,
    children:[
      {path: "images", data: {transitionState: 'imagesPage'}, component: ImagesComponent},
      {path: "videos",  data: {transitionState: 'videosPage'}, component: VideosComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
