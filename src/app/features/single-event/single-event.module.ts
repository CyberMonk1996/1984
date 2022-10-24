import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleEventComponent } from './single-event.component';
import { SingleEventRoutingModule } from './single-event-routing.module';


@NgModule({
  declarations: [SingleEventComponent],
  imports: [
    CommonModule, SingleEventRoutingModule
  ]
})
export class SingleEventModule { }
