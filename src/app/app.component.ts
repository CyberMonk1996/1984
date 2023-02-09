import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Brave_New_World';

  constructor(
    public spinnerService: SpinnerService,
  ) {}
  ngOnInit(): void {
    this.spinnerService.loading$().subscribe(res=>console.log(res));
  }



}
