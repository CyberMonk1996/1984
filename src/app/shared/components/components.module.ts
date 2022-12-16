import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeSliderComponent } from './youtube-slider/youtube-slider.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    YoutubeSliderComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule, YouTubePlayerModule
  ],
  exports: [
    YoutubeSliderComponent,
    SpinnerComponent,
  ]
})
export class ComponentsModule { }
