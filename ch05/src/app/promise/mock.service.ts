import { Injectable } from '@angular/core';
import { USER } from './mock-user';
import { User } from './user';

@Injectable()
export class MockService {
    getUser(): Promise<User[]> {
        return Promise.resolve(USER);
    }

    getUserDelay(): Promise<User[]> {
        return new Promise<User[]>(resolve => 
            setTimeout(resolve, 1000))
            .then(() => this.getUser());
    }

    getRequest(status: boolean): Promise<any> {
        if (status) {
            return Promise.resolve("Request approved.")
                .then(function (reason) {
                    return reason;
                }, function(reason) {
                    return "NO";
                });
        } else {
            return Promise.reject("Request rejected")
                .then(function (reason) {
                    return "YES";
                }, function (reason) {
                    return reason;
                });
        }
    }
}
