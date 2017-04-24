import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HelloComponent } from './app.hello.component'
import { RootComponent } from './app.root.component'

const appRoutes: Routes = [
    {path: "", component: RootComponent},
    {path: "hello", component: HelloComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule {}