import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[transientcolor]',
    host: {
        '(mouseenter)': 'onMouseEnter($event.target)',
        '(mouseleave)': 'onMouseLeave($event.target)'
    }
})
export class CssSelectorWithHostDirective {
    private defaultColor: string = 'blue';

    constructor(private el: ElementRef) {
        this.el = el;
        this.setColor(this.defaultColor);
    }

    onMouseEnter() {
        this.setColor('green');
    }

    onMouseLeave() {
        this.setColor(this.defaultColor);
    }

    private setColor(color: string) {
        this.el.nativeElement.style.color = color;
    }

}