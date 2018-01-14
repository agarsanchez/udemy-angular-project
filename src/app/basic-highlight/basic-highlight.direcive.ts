/**
 * Created by albertogarciasanchez on 11/1/18.
 */
import {Directive, ElementRef, OnInit} from '@angular/core';


@Directive({selector: '[appBasicHighlight]'})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.backgroundColor = 'green';
  }
}

