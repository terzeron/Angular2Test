import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  template: `
    <button [ngClass]="myclass">button 1</button>
    <button [ngClass]="'active'">button 2</button>
    <button bind-ngClass="myclass">button 3</button>
    <br>
    <button [attr.class]="myclass">버튼4</button>
    <button [class.active]="true">버튼5</button>`,
  styles: [`
    button {
      width: 100px; padding: 10px;
      margin-bottom: 10px;
      text-align:center;   
      border: 1px dotted #666;           
    }
    button.active {
      background-color: #CFD7EB; border: 1px solid #666;
    }
  `]
})
export class NgclassComponent {
  myclass: string="active";  

}