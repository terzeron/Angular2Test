import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-oneway-expression',
  template: `
    <input type="text" [value]="message">
    <input type="text" bind-value="message">
    <input type="text" [attr.value]="message">
  `
})
export class OnewayExpressionComponent {
  message: string = "hello";
}