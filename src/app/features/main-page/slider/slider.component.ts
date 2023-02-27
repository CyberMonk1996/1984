import { Component, HostListener, Input, OnInit } from '@angular/core';
import { eventData } from "src/app/shared/constants/event-data";
import { EventData } from "src/app/shared/models/event.model";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  bandData: EventData[] = [];
  autoSlide = true;
  slideInterval = 6000;
  selectedIndex = 0;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch(event.code) {
      case "ArrowLeft": this.onPrevClick(); break;
      case "ArrowRight": this.onNextClick(); break;
    }
  }



  constructor() { }

  ngOnInit(): void {
    this.bandData = eventData;
    if(this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // sets index of image on dot/indicator click
  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick( ): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.bandData.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.bandData.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}



