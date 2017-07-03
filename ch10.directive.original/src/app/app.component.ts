import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>지시자(Directive)</h1>
        </a>
        <ol class="tree-list">
          <li><a routerLink="/basic-example">커스텀 지시자 간단 예제</a></li>
          <li><a routerLink="/css-selector-example">css selector 예제</a></li>
          <li><a routerLink="/css-selector-with-input-example">css selector 예제 - input</a></li>
           <li><a routerLink="/css-selector-with-host-example">css selector 예제 - host</a></li>
           <li><a routerLink="/css-selector-with-host-listener-example">css selector 예제 - host listener</a></li>
           <li><a routerLink="/renderer-example">elementref vs renderer</a></li>
           <li><a routerLink="/pass-to-directive">pass to directive</a></li>
           <li><a routerLink="/binding-to-directive">binding to directive</a></li>
           <li><a routerLink="/custom-attr-directive">custom attribute directive</a></li>
           <li><a routerLink="/custom-structural-directive">custom structural directive</a></li>
       </ol>
    </div>
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'app works!';
}
