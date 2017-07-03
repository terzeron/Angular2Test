import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



/* application router settings */
import { AppRoutingModule, appRoutingProviders } from './app.routing';

/* feature module */
import { MemberModule } from './member/member.module';
import { ChildrenModule } from './children/children.module';

/* global components */
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MemberModule,
    ChildrenModule
  ],
  providers: [appRoutingProviders],
  declarations: [
    AppComponent, IntroComponent, HelloComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }