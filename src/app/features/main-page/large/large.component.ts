import { Component, HostListener, OnInit } from '@angular/core';
import { eventData } from 'src/app/shared/constants/event-data';
import { EventData } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-large',
  templateUrl: './large.component.html',
  styleUrls: ['./large.component.scss']
})
export class LargeComponent implements OnInit {

  bandData: EventData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.bandData = eventData;
  }

}
