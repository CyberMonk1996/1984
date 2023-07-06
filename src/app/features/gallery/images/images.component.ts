import { Component, OnInit } from '@angular/core';
import { images } from 'src/app/shared/constants/images';
import { BehaviorSubject } from 'rxjs';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  images: string [] = [];
  imageToShow: BehaviorSubject<string> = new BehaviorSubject(images[0]);
  activeImage: string = "";
  page: number = 0;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const currentIndex = this.images.indexOf(this.imageToShow.value);
    if (event.key === 'ArrowRight') {
      const nextIndex = currentIndex + 1;
      if (nextIndex < this.images.length) {
        this.imageToShow.next(this.images[nextIndex]);
      }
      if(currentIndex === 5) {
        this.moveRight();
      }
    }
    if (event.key === 'ArrowLeft') {
      const nextIndex = currentIndex - 1;
      if (nextIndex >= 0) {
        this.imageToShow.next(this.images[nextIndex]);
      }
      if(currentIndex === 0) {
        this.moveLeft();
      }
    }

  }
  constructor() { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.images = [];
    for(let i = this.page * 6; i< (this.page + 1) * 6; i++) {
      this.images.push(images[i]);
    }
  }

  changeImageClick(id: number) {
    this.imageToShow.next(this.images[id]);
  }

  moveLeft() {
    this.page = this.page - 1;
    this.loadImages();
  }

  moveRight() {
    this.page++;
    this.loadImages();
  }

  calculateMoveRight() {
    const pagesToDisplay = Math.floor(images.length / 6);
    if(pagesToDisplay === this.page) {
      return false;
    }
    return true;
  }

}
