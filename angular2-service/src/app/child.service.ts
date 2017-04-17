import { Injectable } from '@angular/core';
import { Parent } from './parent.service';

export interface Child {
    getData();
}

@Injectable()
export class FirstChild implements Child {
    constructor(public parent: Parent) {}

    getData() {
        return [
            { Child : 'FirstChild service' },
            { parent : this.parent.getName() }
        ];
    }
}

@Injectable()
export class SecondChild extends Parent implements Child {
    getData() {
        return [
            { Child : 'FirstChild service' },
            { parent : super.getName() }
        ];
    }
}
