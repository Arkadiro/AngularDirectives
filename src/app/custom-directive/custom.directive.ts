import { Directive, Input, HostBinding, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @Input() textcolor:string;
  @HostBinding('style.color') color:string;
  @HostBinding('attr.role') role:string;
  
  
  ngOnInit() {
    this.color = this.textcolor
    this.role = 'user'
  }


  

  
  
  
}
