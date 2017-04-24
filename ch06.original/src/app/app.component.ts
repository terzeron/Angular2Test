import { Component } from '@angular/core';
import { TitleComponent } from './app.title.component'

@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>` 
  ,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
}
