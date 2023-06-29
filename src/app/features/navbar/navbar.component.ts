import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  collapsed: boolean = false;
  @ViewChild("navMenu") navMenu!: ElementRef;
  @HostListener("window:resize", [])
  public onResize() {
    this.checkDevice();
  }
  smallScreen!: boolean;

  constructor(
    
  ) { }

  ngOnInit(): void {
    this.checkDevice()
  }

  hamburger() {
    this.collapsed === false ? this.collapsed = true : this.collapsed = false;
  }
  checkDevice() {
    if (window.innerWidth < 768) {
      this.smallScreen = true;
    } else {
      this.smallScreen = false;
    }
  }
}
