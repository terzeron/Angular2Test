import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[my-element-ref]'
})
export class MyElementRef {
    constructor(public el: ElementRef, public renderer: Renderer) {
        this.el.nativeElement.style.backgroundColor = 'orange';
    }
}

@Directive({
    selector: '[my-renderer]'
})
export class MyRenderer {
    constructor(public el: ElementRef, public renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'background', 'aqua');
    }
}

@Component({
    selector: 'app-element-renderering',
    template: `
        <div my-element-ref>1. native style</div>
        <div my-renderer>2. renderer style</div>
    `
})
export class ElementRenderingComponent {

}