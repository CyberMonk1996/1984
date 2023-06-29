import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { images } from 'src/app/shared/constants/images';
import { VideoLink, videos } from 'src/app/shared/constants/videos';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: VideoLink[] = [];
  videoToShow: BehaviorSubject<string> = new BehaviorSubject(videos[0].videoLink);
  activeVideo: string = "";
  page: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.loadVideos();
    console.log(videos.length)
  }


  loadVideos() {
    this.videos = [];
    for(let i = this.page * 6; i< (this.page + 1) * 6  ; i++) {
      if(videos.length > i) {
        this.videos.push(videos[i]);
      }
    }
  }

  changeVideo(id: number) {
    this.videoToShow.next(this.videos[id].videoLink);
  }

  moveLeft() {
    this.page = this.page - 1;
    this.loadVideos();
  }

  moveRight() {
    this.page++;
    this.loadVideos();
  }

  calculateMoveRight() {
    if (this.page > Math.ceil(this.videos.length / 6) + 1) {
      return false;
    } else return true;
  }
}
