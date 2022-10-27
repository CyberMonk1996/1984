import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-slider',
  templateUrl: './youtube-slider.component.html',
  styleUrls: ['./youtube-slider.component.scss']
})
export class YoutubeSliderComponent implements OnInit {

  @Input() youtubeLinks!: string[];
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.youtubeLinks);
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
