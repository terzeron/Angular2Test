import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
// TODO
import { MyClickComponent } from './basic-example/my-click.component';
import { CssSelectorComponent } from './css-selector-example/css-selector.component';
import { CssSelectorWithInputComponent } from './css-selector-example/css-selector-with-input.component';
import { CssSelectorWithHostComponent } from './css-selector-example/css-selector-with-host.component';
import { CssSelectorWithHostListenerComponent } from './css-selector-example/css-selector-with-host-listener.component';
import { ElementRenderingComponent } from './renderer-example/element-rendering.component';
import { PassToDirectiveComponent } from './pass-to-directive/pass-to-directive.component';
import { BindingToDirectiveComponent } from './binding-to-directive/binding-to-directive.component';
import { CustomAttrDirectiveComponent } from './custom-attr-directive/custom-attr.component';
import { CustomStructuralDirectiveComponent } from './custom-structural-directive/myif.component';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    // TODO
    { path: 'basic-example', component: MyClickComponent },
    { path: 'css-selector-example', component: CssSelectorComponent },
    { path: 'css-selector-with-input-example', component: CssSelectorWithInputComponent },
    { path: 'css-selector-with-host-example', component: CssSelectorWithHostComponent },
    { path: 'css-selector-with-host-listener-example', component: CssSelectorWithHostListenerComponent },
    { path: 'renderer-example', component: ElementRenderingComponent },
    { path: 'pass-to-directive', component: PassToDirectiveComponent },
    { path: 'binding-to-directive', component: BindingToDirectiveComponent },
    { path: 'custom-attr-directive', component: CustomAttrDirectiveComponent },
    { path: 'custom-structural-directive', component: CustomStructuralDirectiveComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);