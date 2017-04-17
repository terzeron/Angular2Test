import { Component, Input } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
    selector: 'taxi-component',
    template: `taxi component : {{s.message}} <button (click)="s.message='taxi'">select</button><br>`,
})

export class TaxiComponent {
    constructor(public s: SharedService) {
    }
}
