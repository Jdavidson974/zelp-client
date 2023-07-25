import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSizingBox]'
})
export class SizingBoxDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  @Input('width') width: number = 200;
  @Input('height') height: number = 38;
  ngAfterViewInit(): void {
    this.renderer2.setStyle(this.el.nativeElement, 'width', this.width + "px");
    this.renderer2.setStyle(this.el.nativeElement, 'height', this.height + "px");
  }
}
