import { Component } from '@angular/core';

@Component({
    selector: 'app-css-selector-example',
    template: `
        <h1 color='yellow' bgColor='black'>yellow text with black background</h1>
    `
})
export class CssSelectorWithInputComponent {
    constructor() { }
}