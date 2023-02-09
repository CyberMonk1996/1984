import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { musicians } from 'src/app/shared/constants/musicians-data';
import { Musician } from 'src/app/shared/models/musicians.model';

@Component({
  selector: 'apppersonal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {
  bioShort: boolean = true;
  musician!: Musician;
  isBioLong!: boolean;
  musicianName!: string;

  constructor(
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findFromArray();
    this.isBioLong = this.musician.biography.length > 100;
  }

  getName() {
    let nameToFix: string = "";
    this._ActivatedRoute.params.subscribe((params) => {
      nameToFix = String(params["name"]);
    })
    return nameToFix.split("-").join(" ");
  }

  findFromArray() {
    this.musician = musicians.find((item) => item.name === this.getName())!;
  }

  shortenBio(bio: string) {
    let arr = bio.split(" ");
    let shorterBioArr: string[] = [];
    for(let i=0; i<40; i++) {
      shorterBioArr.push(arr[i]);
    }
    if (this.bioShort) {
      return shorterBioArr.join(" ") as string;
    } else {
      return bio;
    }
  }

  toggleBioLength() {
    this.bioShort = !this.bioShort;
  }
  seeButtonText() {
    return this.bioShort ? "See More" : "See Less";
  }

  image() {
    return {
      'background-image': `url(${this.musician.photo})`
    }
  }
}
