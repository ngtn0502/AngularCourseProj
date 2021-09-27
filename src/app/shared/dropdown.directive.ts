import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirective {
  elementRef: ElementRef;
  renderer: Renderer2;
  isOpen: boolean = false;

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  @HostListener('click') click(eventData: Event) {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.renderer.addClass(
        this.elementRef.nativeElement.childNodes[1],
        'show'
      );
      this.renderer.addClass(this.elementRef.nativeElement, 'show');
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement.childNodes[1],
        'show'
      );
      this.renderer.removeClass(this.elementRef.nativeElement, 'show');
    }
  }
}
