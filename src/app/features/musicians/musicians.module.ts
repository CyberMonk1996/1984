import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusiciansMainComponent } from './musicians-main/musicians-main.component';
import { MusiciansComponent } from '../musicians/musicians.component';
import { HomeRoutingModule } from './musicians-routing.module';



@NgModule({
  declarations: [
    MusiciansMainComponent,
    MusiciansComponent
  ],
  imports: [
    CommonModule, HomeRoutingModule
  ]
})
export class MusiciansModule { }
