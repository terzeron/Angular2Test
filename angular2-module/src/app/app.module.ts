import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'
import { AppRouterModule } from './app.route.module'

import { RootComponent } from './app.root.component'
import { HelloComponent } from './app.hello.component'

import { MemberListModule } from './member/member.module'

import { TitleComponent } from './app.title.component'
import { UserService } from './app.user.service'

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    CoreModule.forRoot({userName: 'Gwiyeong'}),
    MemberListModule
  ],
  providers: [ /*UserService */ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
