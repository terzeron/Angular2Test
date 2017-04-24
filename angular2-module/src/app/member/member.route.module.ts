import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MemberListComponent } from './member.component'


const appRoutes: Routes = [
    {path: "members", component: MemberListComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MemberRouterModule {}