import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highLightColor: string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.highLightColor;
    this.color="white"
    // this.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    // this.renderer.setStyle(this.elRef.nativeElement.parentElement, 'background-color', 'black')
    console.log(this.elRef)
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor;
    this.color="black"
    // this.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
    // this.renderer.setStyle(this.elRef.nativeElement.parentElement, 'background-color', 'transparent')
  }

  @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultColor;
  @HostBinding('style.color') color:string;
  // @HostBinding('src') src:string = 'https://www.w3schools.com/js/pic_bulbon.gif';
}
