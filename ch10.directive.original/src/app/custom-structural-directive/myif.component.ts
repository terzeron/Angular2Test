import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-structural-directive',
    template: `
        <button (click)="status=!status">{{status ? 'Toggle: myIf' : 'Toggle: ngIf'}}</button>
        <p *myIf="status">
            커스텀 구조 지시자: myIf
        </p>
        <p *ngIf="!status">
            내장 구조 지시자: ngIf
        </p>
    `
})
export class CustomStructuralDirectiveComponent {
    status = true;
}