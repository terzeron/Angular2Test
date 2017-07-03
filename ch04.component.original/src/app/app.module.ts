import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HelloComponent } from './hello.component';
import { ParentInputComponent } from './parent-input.component';
import { ChildInputComponent } from './child-input.component';

@NgModule({
  declarations: [
    HelloComponent,
    ParentInputComponent,
    ChildInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    HelloComponent, 
    ParentInputComponent
  ]
})
export class AppModule { }
