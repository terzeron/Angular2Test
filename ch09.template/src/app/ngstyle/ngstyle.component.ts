import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  template: `
    <h2 [ngStyle]="{'font-style': style, 'font-weight': weight}">{{text}}</h2>
    <h1 [style.font-style]="style" [style.font-weight]="weight">{{text}}</h1>
  `
})

export class NgstyleComponent {
  text = '안녕하세요';
  weight = 'bold';
  style = 'italic';
}