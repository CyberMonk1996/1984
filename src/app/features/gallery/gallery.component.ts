import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ROUTE_ANIMATION } from "src/app/shared/animations/gallery-animation";

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.scss'],
  animations: [
    ROUTE_ANIMATION
  ]
})
export class GalleryComponent implements OnInit {
  constructor() {};
  @ViewChild(RouterOutlet) routerOutlet!: RouterOutlet;

  ngOnInit(): void {

  }

  getRouteAnimationState() {
    return this.routerOutlet && this.routerOutlet.activatedRouteData && this.routerOutlet.activatedRouteData['transitionState'];
  }
}
