import { Directive, Attribute, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[alertMsg]',
    host: {
        '(click)': 'onMouseClick()'
    }
})
export class AlertDirective {
    constructor(@Attribute('staticText') private staticText: String) { }

    // 컴퍼넌트에서 뷰로 내보낸다는 의미에서 output이라고 함
    @Output() outputProperty = new EventEmitter<Object>();

    onMouseClick() {
        let msg: Object = {
            'title': '지시자입니다.',
            'staticText': this.staticText,
            'msgText': this.msgText
        };
        this.outputProperty.emit(msg);
    }

    msgText: string;
    // 뷰로부터 컴퍼넌트로 들어온다는 의미에서 input이라고 함
    @Input() set setMsgText(status: string) {
        this.msgText = status;
    }
}
