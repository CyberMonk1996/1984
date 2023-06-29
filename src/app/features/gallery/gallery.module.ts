import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';




@NgModule({
  declarations: [GalleryComponent, ImagesComponent, VideosComponent],
  imports: [
    CommonModule, GalleryRoutingModule, RouterModule, ComponentsModule, LazyLoadImageModule
  ]
})
export class GalleryModule { }
