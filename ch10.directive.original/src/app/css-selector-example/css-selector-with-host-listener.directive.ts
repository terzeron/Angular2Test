import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[transientcolor]'
})
export class CssSelectorWithHostListenerDirective {
    private defaultColor: string = 'blue';

    constructor(private el: ElementRef) {
        this.el = el;
        this.setColor(this.defaultColor);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setColor('green');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setColor(this.defaultColor);
    }

    private setColor(color: string) {
        this.el.nativeElement.style.color = color;
    }

}