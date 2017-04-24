import { Component, Input } from '@angular/core';
import { UserService } from './app.user.service';


@Component({
  selector: 'app-title',
  template:`{{title}}<br>{{subtitle}}<br>{{userName}}` 
})
export class TitleComponent {
  @Input() title: string;
  subtitle = 'Hello Module';
  userName: string = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}
