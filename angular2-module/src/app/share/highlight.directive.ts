import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    private el: HTMLElement;
    constructor(el: ElementRef) {
        console.log("in constructor")
        this.el = el.nativeElement;
        this.el.style.fontSize = "30px";
    }

    @HostListener('mousemove') onMouseMove() {
        console.log("mouse move")
        this.el.style.backgroundColor = "red";
        this.el.style.color = "black"
    }

    @HostListener('mouseleave') onMouseLeave() {
        console.log("mouse leave")
        this.el.style.backgroundColor = null;
        this.el.style.color = "black"
    }
}