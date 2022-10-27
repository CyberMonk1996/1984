import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeSliderComponent } from './youtube-slider/youtube-slider.component';
import { YouTubePlayerModule } from '@angular/youtube-player';



@NgModule({
  declarations: [
    YoutubeSliderComponent
  ],
  imports: [
    CommonModule, YouTubePlayerModule
  ],
  exports: [
    YoutubeSliderComponent
  ]
})
export class ComponentsModule { }
