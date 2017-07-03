import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[color]',
    // colour: directive property
    // color라는 prop과 bind하여 거기서 값을 읽어들임
    //inputs: ['bgColor', 'colour: color']
})
export class CssSelectorWithInputDirective {
    constructor(private el: ElementRef) {
        this.el = el;
    }

    // DOM에서 color 속성의 값이 바뀌면 colour() setter가 trigger됨
    @Input('color') set colour(color: string) {
        this.el.nativeElement.style.color = color;
    }

    @Input('bgColor') set bgColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}