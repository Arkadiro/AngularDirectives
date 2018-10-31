import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef){
  }
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'purple'
    this.elementRef.nativeElement.style.color = 'white'
  }
}