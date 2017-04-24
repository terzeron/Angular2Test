import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyComponent } from './my-component/my.component';

import { ParentComponent } from './component-nesting/parent.component';
import { ChildComponent } from './component-nesting/child.component';
import { GrandsonComponent } from './component-nesting/grandson.component';

import { ParentInputComponent } from './data-transfer/parent-input.component';
import { ChildInputComponent } from './data-transfer/child-input.component';

@NgModule({
  declarations: [
    MyComponent,

    ParentComponent,
    ChildComponent,
    GrandsonComponent,

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
    MyComponent,
    
    ParentComponent, 
    
    ParentInputComponent 
  ]
})
export class AppModule { }
