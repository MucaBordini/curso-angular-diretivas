import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setStyle( this._elementRef.nativeElement, 'background-color', 'yellow' );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setStyle( this._elementRef.nativeElement, 'background-color', 'white' );
    this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }

}
