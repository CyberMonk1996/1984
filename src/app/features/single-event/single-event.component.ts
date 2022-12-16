import { Component, OnInit, Renderer2, } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { eventData } from "src/app/shared/constants/event-data";
import { musicians } from "src/app/shared/constants/musicians-data";
import { EventData } from "src/app/shared/models/event.model";
import { Musician } from "src/app/shared/models/musicians.model";

@Component({
  selector: "app-single-event",
  templateUrl: "./single-event.component.html",
  styleUrls: ['./single-event.component.scss'],
})
export class SingleEventComponent implements OnInit {
  weekday!: string;
  event!: EventData;
  bandMembers: Musician[] = [];

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private renderer: Renderer2
  ){}

  ngOnInit(): void {
    this.getEvent();
    this.getMusicians();
    console.log(this.bandMembers);
  }

  getEvent() {
    this._ActivatedRoute.params.subscribe((params) => {
      const day = params['day'];
      eventData.forEach((event) => {
        if (event.eventDay === day) {
          this.event = event;
        }
      })
    });
  }

  getMusicians() {
    this.event.members.forEach((artist) => {
      musicians.forEach((musician) => {
        if(musician.name === artist) {
          this.bandMembers.push(musician);
        }
      })
    })
  }

  changeSpaceInLink(name: string) {
    return name.split(" ").join("-");
  }

  load(photo: HTMLImageElement) {
    this.renderer.setStyle(photo, "width", "90%");
    this.renderer.setStyle(photo, "height", "500px");
  }


}
