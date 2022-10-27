import { Component, OnInit } from '@angular/core';
import { musicians } from 'src/app/shared/constants/musicians-data';
import { Musician } from 'src/app/shared/models/musicians.model';

@Component({
  selector: 'app-musicians-main',
  templateUrl: './musicians-main.component.html',
  styleUrls: ['./musicians-main.component.scss']
})
export class MusiciansMainComponent implements OnInit {
  musicians!: Musician[];
  constructor() { }

  ngOnInit(): void {
    this.musicians = musicians;
    console.log(this.musicians);
  }

}
