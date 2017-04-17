import { Component, Input } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
    selector: 'car-component',
    template: `car component : {{s.message}} <button (click)="s.message='car'">select</button><br>`,
})

export class CarComponent {
    constructor(public s: SharedService) {
    }
}
