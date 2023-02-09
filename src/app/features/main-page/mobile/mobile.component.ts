import { Component, OnInit } from '@angular/core';
import { EventData } from '../../../shared/models/event.model';
import { eventData } from '../../../shared/constants/event-data';

@Component({
  selector: 'main-page-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  bandData: EventData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.bandData = eventData;
  }

}
