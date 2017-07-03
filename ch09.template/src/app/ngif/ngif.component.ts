import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: `  
    <select [(ngModel)]="movie">      
      <option value=1>트랜스포머</option>
      <option value=2>스파이더맨</option>
    </select>

    <h2 *ngIf="movie == 1">transformer</h2>
    <h2 *ngIf="movie == 2">spiderman</h2>
    
    <h3>
      <span template="ngIf movie == 1">transformer</span>
      <span template="ngIf movie == 1">transformer</span>
    </h3>

    <h4>
      <template [ngIf]="movie == 1">transformer</template>
      <template [ngIf]="movie == 2">spiderman</template>
    </h4>
      `
})
export class NgifComponent{

  movie = 2;
  
}