import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OopComponent } from './child.component'
import { MockComponent } from './mock/mock.component'
import { PromiseComponent } from './promise/promise.component'
import { ListComponent } from './promise/list.component'
import { CarComponent } from './shared/car.component'
import { TaxiComponent } from './shared/taxi.component'
import { ParentComponent } from './shared/parent.component'
import { WikiComponent } from './wiki/wiki.component'
// import { WikiPromiseComponent } from './wiki/wiki.component.promise'

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        OopComponent,
        MockComponent,
        ListComponent,
        PromiseComponent,
        CarComponent,
        TaxiComponent,
        ParentComponent,
        WikiComponent,
        // WikiPromiseComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule, JsonpModule,
        CommonModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        HelloComponent,
        OopComponent,
        MockComponent,
        PromiseComponent,
        ParentComponent,
        WikiComponent,
        // WikiPromiseComponent
    ]
})
export class AppModule { }
