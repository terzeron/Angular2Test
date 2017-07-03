import { Component } from '@angular/core';

@Component({
    selector: 'app-css-selector-example',
    template: `
        <h1 transientcolor>Let's hover me</h1>
    `
})
export class CssSelectorWithHostComponent {
    constructor() { }
}