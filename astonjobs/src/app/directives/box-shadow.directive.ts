import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoxShadow]'
})
export class BoxShadowDirective {

  constructor(private elem: ElementRef) {
    this.setShadow(8, '#a3a3a3');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setShadow(4, '#a3a3a3');
    this.setTransformY(0.5);
    this.elem.nativeElement.textContent = 'Yeoman';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setShadow(8, '#a3a3a3');
    this.setTransformY(-0.5);
  }

  setTransformY(y: number) {
    this.elem.nativeElement.style.transform = `translateY(${y}px)`;
  }

  setShadow(thickness: number, color: string) {
    this.elem.nativeElement.style.boxShadow = `0 0 ${thickness}px ${color}`;
  }
}
