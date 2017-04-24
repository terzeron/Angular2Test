import { Injectable, Optional } from '@angular/core';


export class UserServiceConfig {
    userName = '';
}

@Injectable()
export class UserService {
    userName = "Gwiyeong";

    constructor(@Optional() config: UserServiceConfig) {
        if (config) {
            this.userName = config.userName;
        }
    }
}

