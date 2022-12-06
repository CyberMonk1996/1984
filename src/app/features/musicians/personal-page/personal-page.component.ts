import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';
import { musicians } from 'src/app/shared/constants/musicians-data';
import { Musician } from 'src/app/shared/models/musicians.model';

@Component({
  selector: 'apppersonal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {
  bioShort: boolean = true;
  sensei = {
    name: "Reso Kiknadze",
    photo: "https://files.fm/thumb_show.php?i=xubmjqr8b",
    age: 55,
    instrument: "Tenor Sax, Alto Sax",
    biography: `
      born 1960 and grown up in Tbilisi, Georgia.
      1977-82 studied classical philology at the Tbilisi State University (diploma 1982), played saxophone in the Georgian TV Big Band and the Conservatory Jazz Quintet, performing at various festivals in Tbilisi,Tallin, Vilnius etc. 1981-90 composition studies under Mikheil Shugliashvili (1941-1996).
      1986-90 studies at the Tbilisi State Conservatoire composition and Georgian traditional music, was a member of the Anchiskhati Cathedral Choir in Tbilisi.

      1991 moved to Germany and studied composition under Friedhel Döhl at the Musikhochschule Lübeck, Electroacoustic Music under Dirk Reith, was his assistant at the Electroacoustic Studio of the Musikhochschule Lübeck.
      1992 - 94 member of the ensemble 'Nuova Sonanza', collaboration with "tatoeba - theatre dance grotesque".
      1998 - 2011 teacher at the Electrnic Music Studio of the Musikhochschule Lübeck, also teacher for saxophone and improvisation at the Lübecker Musikschule.
      2000-2003 collaboration with TanzOrt Nord (2000 - 'Maria Magdalena', 2001 - 'Cumulus', 2003 - 'DisTanz').
      2002 - joined 'Resolution Group', a free improvisation ensemble with John Eckhardt, Cordula Rohde and Benjamin Lütke. Since 2004 lecturing at various institutes about Electroacoustic music, Georgian traditional music etc. Since 2005 - collaboration with the Swiss-Gerogian contemporary music festival 'close encounters'
      2011 - 2019 rector of the Tbilisi State Conservatoire

    Currently: Professor for electroacoustic and experimental Music at the Ilia State University in Tbilisi, Georgia (since 2008); teacher at the Tbilisi State Conservatoire (since 2011); performing all over the world both as saxophone-player and computer musician in various formations of jazz, contemporary music, free improvisation; composer and coauthor of many projects with dance, visual arts, poetry, theatre, cinema; lectures and master classes in electroacoustic music, composition, improvisation, jazz.

    `,
    youtubeLinks: [
      "rWaPle0GnnM",
      "_fdT_9uiJbA",
      "o-Dtqlp25s4",
      "zsaStaEWC78",
      "WIjOntIAkG8",
      "qkdvMVAsoOQ",
      "98kyliG0Xls",
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/reso.kiknadze",
      youtube: "https://www.youtube.com/@resonicart",
      instagram: "https://www.instagram.com/reso.kiknadze/",
      spotify: "https://open.spotify.com/artist/4QzR0ODIhsML8v6P2kIA1I",
      mail: "resomusic@gmail.com",

    }

  };
  isBioLong = this.sensei.biography.length > 100;
  musician!: Musician;
  musicianName!: string;
  constructor(
    private _ActivatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {

  }

  getName() {
    let nameToFix: string = "";
    this._ActivatedRoute.params.subscribe((params) => {
      nameToFix = String(params["name"]);
    })
    return nameToFix.split("-").join(" ");
  }

  findFromArray(musicianName: string) {


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

}
