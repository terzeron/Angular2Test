import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';


import { IntroComponent } from './intro.component';
import { NotFoundComponent } from './not-found.component';
import { HelloComponent } from './hello/hello.component';


// Config


const helloRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'hello', component: HelloComponent }
];

const appRoutes: Routes = [
  ...helloRoutes,
  { path: '**', component: NotFoundComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

let hashLocationStrategy: boolean = false;
export const appRoutingProviders: any[] = [
  AuthGuard,
  CanDeactivateGuard
];
if (hashLocationStrategy) {
  appRoutingProviders.push({ provide: LocationStrategy, useClass: HashLocationStrategy });
}

