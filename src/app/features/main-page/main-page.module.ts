import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
     SliderComponent, MainPageComponent, MobileComponent,
  ],
  imports: [
    CommonModule, MainPageRoutingModule
  ],
  exports: [

  ]
})
export class MainPageModule { }
