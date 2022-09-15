import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private _el: ElementRef) { 
    _el.nativeElement.style.color = '#e35e6b'
  }

}
