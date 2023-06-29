import { Component, OnInit } from '@angular/core';
import { images } from 'src/app/shared/constants/images';
import { BehaviorSubject } from 'rxjs';

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

  changeImage(id: number) {
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
    if (this.page > Math.ceil(this.images.length / 6)) {
      return false;
    } else return true;
  }

}
