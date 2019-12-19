import { Directive, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[imgBig]'
})
export class ImgBigDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector('div');
    this.renderer.addClass(container, 'img-big');
  }

}

@Directive({
  selector: '[imgMedium]'
})
export class ImgMediumDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector('div');
    this.renderer.addClass(container, 'img-medium');
  }

}

@Directive({
  selector: '[imgSmall]'
})
export class ImgSmallDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector('div');
    this.renderer.addClass(container, 'img-small');
  }

}