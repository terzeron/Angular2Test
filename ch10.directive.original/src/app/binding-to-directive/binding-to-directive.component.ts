import { Component } from '@angular/core';

@Component({
    selector: 'app-binding-to-directive',
    // msg는 뷰와 컴퍼넌트 사이에서 2way binding용도로 사용
    // outputProperty라는 이벤트가 발생하면 outputEvent($event)를 호출
    // staticValue는 바인딩없이 뷰에서 컴퍼넌트로 전달
    template: `
        <input type="text" [(ngModel)]="initialMsgText">
        <button alertMsg [setMsgText]="initialMsgText" (outputProperty)="outputEvent($event)" staticText="정적 메시지">인사말 출력</button>
        <pre>
            {{msgDirective | json}}
        </pre>
    `
})
export class BindingToDirectiveComponent {
    initialMsgText = "행복한 하루 되세요";
    msgDirective: Object;

    constructor() { 
        this.msgDirective = "없음";
    }

    outputEvent(msg: Object) {
        this.msgDirective = msg;
    }
}