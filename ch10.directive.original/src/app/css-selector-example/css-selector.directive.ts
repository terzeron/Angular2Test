import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[red]',
})
export class CssSelectorDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.color = 'red';
    }
}