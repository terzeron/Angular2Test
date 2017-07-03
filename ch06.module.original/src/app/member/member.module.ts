import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MemberRouterModule } from './member.route.module'
import { MemberService } from './member.service'
import { MemberListComponent } from './member.component'
import { ShareModule } from '../share/share.module'

@NgModule({
    declarations: [MemberListComponent],
    imports: [CommonModule, MemberRouterModule],
    providers: [MemberService]
})
export class MemberListModule {}