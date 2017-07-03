import { Component } from '@angular/core';
import { Parent } from './parent.service';
import { FirstChild, SecondChild } from './child.service';

@Component({
    selector: 'oop-cmp',
    template: `<b>injection</b><br>
        {{firstChildData | json}}<br><br>
        <b>inheritance</b><br>
        {{secondChildData | json}}<br><br>`,
    providers: [Parent, FirstChild, SecondChild]
})

export class OopComponent {
    firstChildData;
    secondChildData;
    constructor(firstChild: FirstChild, secondChild: SecondChild) {
        this.firstChildData = firstChild.getData();
        this.secondChildData = secondChild.getData();
    }
}
