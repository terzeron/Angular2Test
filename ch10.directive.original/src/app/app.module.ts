import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
// TODO
import { MyClickComponent } from './basic-example/my-click.component';
import { MyClickDirective } from './basic-example/my-click.directive';

import { CssSelectorComponent } from './css-selector-example/css-selector.component';
import { CssSelectorDirective } from './css-selector-example/css-selector.directive';

import { CssSelectorWithInputComponent } from './css-selector-example/css-selector-with-input.component';
import { CssSelectorWithInputDirective } from './css-selector-example/css-selector-with-input.directive';

import { CssSelectorWithHostComponent } from './css-selector-example/css-selector-with-host.component';
import { CssSelectorWithHostDirective } from './css-selector-example/css-selector-with-host.directive';

import { CssSelectorWithHostListenerComponent } from './css-selector-example/css-selector-with-host-listener.component';
import { CssSelectorWithHostListenerDirective } from './css-selector-example/css-selector-with-host-listener.directive';

import { ElementRenderingComponent } from './renderer-example/element-rendering.component';
import { MyElementRef } from './renderer-example/element-rendering.component';
import { MyRenderer } from './renderer-example/element-rendering.component';

import { PassToDirectiveComponent } from './pass-to-directive/pass-to-directive.component';
import { MyDirective } from './pass-to-directive/my.directive';

import { BindingToDirectiveComponent } from './binding-to-directive/binding-to-directive.component';
import { AlertDirective } from './binding-to-directive/alert.directive';

import { CustomAttrDirectiveComponent } from './custom-attr-directive/custom-attr.component';
import { CustomAttrDirective } from './custom-attr-directive/custom-attr.directive';

import { CustomStructuralDirectiveComponent } from './custom-structural-directive/myif.component';
import { MyIfDirective } from './custom-structural-directive/myif.directive';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    
    // TODO
    MyClickComponent,
    MyClickDirective,

    CssSelectorComponent,
    CssSelectorDirective,

    CssSelectorWithInputComponent,
    CssSelectorWithInputDirective,

    CssSelectorWithHostComponent,
    CssSelectorWithHostDirective,

    CssSelectorWithHostListenerComponent,
    CssSelectorWithHostListenerDirective,

    ElementRenderingComponent,
    MyElementRef,
    MyRenderer,

    PassToDirectiveComponent,
    MyDirective,

    BindingToDirectiveComponent,
    AlertDirective,

    CustomAttrDirectiveComponent,
    CustomAttrDirective,

    CustomStructuralDirectiveComponent,
    MyIfDirective
 ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
