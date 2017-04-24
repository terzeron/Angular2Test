import { Injectable } from '@angular/core'

export class Member {
    constructor(public name: string, public age: number){ }
}

const MEMBERS: Member[] = [
    new Member("chanwoo", 30),
    new Member("Gwiyeong", 28),
    new Member("kyengwon", 27),
    new Member("jisun", 25),
]

@Injectable()
export class MemberService {
    getMembers() {
        return new Promise<Member[]>(resolve => {
            setTimeout(() => {resolve(MEMBERS);}, 500)
        })
    }
}