import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { eventData } from "src/app/shared/constants/event-data";
import { EventData } from "src/app/shared/models/event.model";

@Component({
  selector: "app-single-event",
  templateUrl: "./single-event.component.html",
  styleUrls: ['./single-event.component.scss'],
})
export class SingleEventComponent implements OnInit {
  weekday!: string;
  event!: EventData;
  constructor(
    private _ActivatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getEvent();
    console.log(this.event);
  }

  getEvent() {
    this._ActivatedRoute.params.subscribe((params) => {
      const day = params['day'];
      console.log(day);
      let event =  eventData.filter((event) => {
        return event.eventDay = day;
      })
      this.event = event[0];
    });
  }


}
