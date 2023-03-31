import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Brave_New_World';

  constructor(
    public spinnerService: SpinnerService,
    private meta: Meta
  ) {
    this.meta.updateTag({ property: 'og:title', content: 'Jazz Club 1984' });
    this.meta.updateTag({ property: 'og:description', content: 'Website of Jazz Club 1984 Tbilisi' });
    this.meta.updateTag({ property: 'og:image', content: 'https://files.fm/thumb_show.php?i=3e97k8tsv' });
    this.meta.updateTag({ property: 'og:url', content: 'https://1984jazz.com/' });
  }
  ngOnInit(): void {
  }



}
