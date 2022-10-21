import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  collapsed: boolean = false;
  @ViewChild("navMenu") navMenu!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  hamburger() {
    this.collapsed === false ? this.collapsed = true : this.collapsed = false;
  }

}
