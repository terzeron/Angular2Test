import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { BuiltinComponent }  from './builtin/builtin.component';
import { AsyncComponent }  from './async/async.component';
import { CustomLimittoComponent }  from './custom/custom-limitto.component';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'builtin', component: BuiltinComponent },
    { path: 'async', component: AsyncComponent },
    { path: 'custom-limitto', component: CustomLimittoComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);