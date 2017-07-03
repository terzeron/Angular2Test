import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    template: `<h1>{{title}}</h1>
    <input type="text" [(ngModel)]="title">
    <textarea [(ngModel)]="title"></textarea>`,
    styles: [`input, textarea { margin-top: 20px; display: block }`]
})
export class MyComponent {
    title = 'Hello, my component';
}