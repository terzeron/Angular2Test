import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-ngmodel',
  template: `
  <select [(ngModel)]="city">
      <option *ngFor="let obj of cities" [value]="obj.eng" [selected]="city==obj.eng?true:false">
          {{obj.han}}
      </option>
  </select><br>

  <br><input [(ngModel)]="city"><br>

  <br><span *ngFor="let obj of cities">
    <input type="radio" [(ngModel)]="city" [value]="obj.eng" name="city">
    {{obj.han}}
  </span><br>
  `,
  
  styles: [`section{margin-bottom:20px;}`]
})
export class TwowayNgmodelComponent {

  city: string = "pusan";
  cities: Object[] = [
    { han: "서울", eng: "seoul" },
    { han: "대전", eng: "daejeon" },
    { han: "대구", eng: "daegu" },
    { han: "부산", eng: "pusan" }
  ];
  
}