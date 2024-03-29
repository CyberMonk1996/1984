import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusiciansMainComponent } from './musicians-main/musicians-main.component';
import { MusiciansComponent } from '../musicians/musicians.component';
import { MusiciansRoutingModule } from './musicians-routing.module';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    MusiciansMainComponent,
    MusiciansComponent,
    PersonalPageComponent,
  ],
  imports: [
    CommonModule, MusiciansRoutingModule, ComponentsModule, LazyLoadImageModule
  ],

})
export class MusiciansModule { }
