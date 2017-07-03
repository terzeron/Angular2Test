import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-directive',
    template: `
        <button my-click>Click me!</button>
    `
})
export class MyClickComponent {
    constructor() { }
}