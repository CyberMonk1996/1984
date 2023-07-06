import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { MobileComponent } from './mobile/mobile.component';
import { LargeComponent } from './large/large.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DataTextDirective } from './slider/data-text.directive.ts.directive';


@NgModule({
  declarations: [
     SliderComponent, MainPageComponent, MobileComponent, LargeComponent, DataTextDirective
  ],
  imports: [
    CommonModule, MainPageRoutingModule, LazyLoadImageModule
  ],
  exports: [

  ]
})
export class MainPageModule { }
