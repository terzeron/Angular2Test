import { Injectable } from '@angular/core';
import { Parent } from './parent.service';

export interface Child {
    getData();
}

@Injectable()
export class FirstChild implements Child {
    constructor(public parent: Parent) { }

    getData() {
        return [
            { child: 'First child service' },
            { parent: this.parent.getName() }  
        ];
    }
}

@Injectable()
export class SecondChild extends Parent implements Child {
    getData() {
        return [
            { child: 'Second child service' },
            { parent: super.getName() }
        ];
    }
}
