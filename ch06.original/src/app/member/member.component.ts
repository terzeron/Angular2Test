import { Component } from '@angular/core'
import { Member, MemberService } from './member.service' 

@Component({
  selector: 'member-list',
  template: `
  <div *ngFor='let m of members'>{{m.name}}의 나이 = {{m.age}}</div>` 
})

export class MemberListComponent{
    members: Member[];
    
    constructor(private memberService: MemberService) { }

    ngOnInit() {
        this.memberService.getMembers().then(members => this.members = members)
    }
 }