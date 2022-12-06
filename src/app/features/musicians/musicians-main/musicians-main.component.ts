import { Component, OnInit, Renderer2 } from '@angular/core';
import { musicians } from 'src/app/shared/constants/musicians-data';
import { Musician } from 'src/app/shared/models/musicians.model';

@Component({
  selector: 'app-musicians-main',
  templateUrl: './musicians-main.component.html',
  styleUrls: ['./musicians-main.component.scss']
})
export class MusiciansMainComponent implements OnInit {
  musicians!: Musician[];
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.musicians = musicians;
  }

  changeSpaceInLink(name: string) {
    return name.split(" ").join("-");
  }

  load(photo: HTMLImageElement) {
    this.renderer.setStyle(photo, "width", "90%");
    this.renderer.setStyle(photo, "height", "500px");
  }
}
