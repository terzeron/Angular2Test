import { Directive } from '@angular/core';

@Directive({
    // component의 selector는 엘리먼트를 지칭하는 것이고
    // directive의 selector는 보통 애트리뷰트를 지칭하는 것임
    // 그래서 대괄호를 쳐서 구분함
    selector: '[my-click]',
    host: { 
        '(click)': 'onClick()'
    }
})
export class MyClickDirective {
    onClick() {
        alert('hello');
    }
}