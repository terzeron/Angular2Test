import { Component } from '@angular/core';

@Component({
  selector: 'builtin',
  template: `
            <p>Date-01 - {{ today }} => {{ today | date }} </p>
            <p>Date-02(with option) - {{ today }} => {{ today | date:'yy년 MM월 dd일' }} </p>
            <br>
            <p>Lowercase Convert - {{ upperCase }} => {{ upperCase | lowercase }} </p>
            <p>Uppercase Convert - {{ lowerCase }} => {{ lowerCase | uppercase }} </p>
            <br>
            <pre>Json-01 - {{ jsonObject }}</pre>
            <pre>Json-02 - {{ jsonString }}</pre>
            <pre>Json-03 - {{ jsonObject | json }} </pre>
            <br>
            <p>Slice(0,3) - {{alphabet}} => {{ alphabet | slice:0:3 }}</p>
            <br>
            <p>Pipe-Chain - {{ today }} => {{ today | date:'EEEE' }} => {{ today | date:'EEEE' | uppercase }} </p>

  `
})

export class BuiltinComponent {
  today:Date = new Date();
  upperCase:string = 'THIS IS LOWER TEXT';
  lowerCase:string = 'this is lower text';
  jsonObject:Object = { title:'옥자', distribution:'netflix', cast:['안서현','변희봉','제이크 질렌할','‎틸다 스윈튼','‎스티븐 연'], ending:'옥자가 죽...',};
  jsonString:string = JSON.stringify(this.jsonObject);
  alphabet:string = 'abcdefghijklmnopqrstuvwxyz';
}