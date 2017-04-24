import { Injectable } from '@angular/core';
import { DummyUsers } from './mock-user';

export interface DataServiceStructure {
    getUser();
}

@Injectable()
export class MockService implements DataServiceStructure {
    constructor() { }
    getUser() {
        return DummyUsers;
    }
}