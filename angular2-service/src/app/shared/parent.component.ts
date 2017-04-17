import { Component, Input } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
    selector: 'parent-component',
    template: `
        parent component : {{s.message}} <button (click)="s.message='parent'">select</button><br>
        <car-component></car-component>
        <taxi-component></taxi-component>`,
    providers: [SharedService]
})

export class ParentComponent {
    constructor(public s: SharedService) {
        s.message = "hello";
    }
}
