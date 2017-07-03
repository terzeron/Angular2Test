import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { BuiltinComponent }  from './builtin/builtin.component';
import { AsyncComponent }  from './async/async.component';

import { CustomLimittoComponent }  from './custom/custom-limitto.component';
import { LimittoPipe } from './custom/limitto.pipe';

@NgModule({
  declarations: [
    AppComponent, IntroComponent, BuiltinComponent, AsyncComponent, 
    CustomLimittoComponent, LimittoPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    routing
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
