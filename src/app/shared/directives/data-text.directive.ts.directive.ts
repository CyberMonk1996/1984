import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[data-text]'
})
export class DataTextDirective {
  @Input('data-text') text!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.setAttribute('data-text', this.text);
  }
}
