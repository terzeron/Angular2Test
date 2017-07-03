import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">                
          <h1>파이프</h1>
        </a>
        <ol class="tree-list">
            <li><a routerLink="/builtin">내장 파이프</a></li>
            <li><a routerLink="/async">비동기 파이프</a></li>
            <li><a routerLink="/custom-limitto">커스텀 제한 파이프</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }