import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-youtube-slider',
  templateUrl: './youtube-slider.component.html',
  styleUrls: ['./youtube-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class YoutubeSliderComponent implements OnInit {

  @Input() youtubeLinks!: string[];
  @Input() singleLink!: string;
  @Input() videoPageCarousel: boolean = false;
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // sets index of image on dot/indicator click
  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick( ): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.youtubeLinks.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.youtubeLinks.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
