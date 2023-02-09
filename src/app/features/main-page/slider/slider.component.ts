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


/**
 * <div *ngIf="bandData && bandData.length > 0">
  <div  *ngFor="let band of bandData; let i = index" class="carousel-container">
    <img
      [src]="band.imageSrc"
      [alt]="band.imageAlt"
      [ngClass]="{'image-active' : selectedIndex === i}"
      class="object-center w-full h-full"
      />

    <div class="absolute w-[100%] top-40 text-white flex flex-col items-center ">
      <h1 class="text-5xl my-10 mx-auto text-shadow">{{ band.eventDay}} </h1>

        <h1 class="text-4xl md:my-28 md:text-6xl my-10 text-shadow ">{{ band.bandName }}</h1>

      <div class="absolute md:bottom-5 mx-auto">
        <button
          [routerLink]="['/events', band.eventDay]"
          class=" z-10 w-[200px] h-16 text-white bg-transparent border-2 rounded-lg
            text-2xl font-semibold cursor-pointer hover:scale-110 duration-500 ease-out">
          <!-- <svg width="200px" height="70px" viewBox="0 0 200 70" class=" hidden md:block">
            <polyline points="0,0 50,25 50,75 200,70"/>
            <polyline points="0,70 100,35 50,75 200,0"/>
            <polyline points="200,0 100,35 50,75 0,70"/>
          </svg> -->
          <span class="text-2xl">See More</span>
        </button>
      </div>
    </div>

    <button class="btn-carousel btn-prev" (click)="onPrevClick()">
      <svg
        xmlns="http://www.w3.org/2000/svg"

        fill="currentColor"
        class="bi bi-arrow-left text-white h-14 w-14 hover:scale-110 duration-300"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>
    </button>
 */


