import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleEventComponent } from './single-event.component';
import { SingleEventRoutingModule } from './single-event-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [SingleEventComponent ],
  imports: [
    CommonModule, SingleEventRoutingModule, ComponentsModule
  ]
})
export class SingleEventModule { }
