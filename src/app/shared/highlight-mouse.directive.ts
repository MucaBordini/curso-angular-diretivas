import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setStyle( this._elementRef.nativeElement, 'background-color', 'yellow' );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setStyle( this._elementRef.nativeElement, 'background-color', 'white' );
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';

  constructor() { }
   

}
