import { Component } from '@angular/core';

@Component({
    selector: 'parent-to-child',
    template: `<div>
    Parent
    <child-input [name1]="fruit1" [name2]="fruit2()" [name3]="fruit3" [name4]="1+1" [name5]="fruit5" [name6]="fruit6"></child-input>
    </div>`,
    styles: [ `div { border: 2px solid #666; padding: 10px; width: 400px; height: 250px; }` ]
})
export class ParentInputComponent {
    fruit1 = "Apple";
    fruit2() {
        return "Pear";
    }
    fruit3 = [ 'Strawberry', 'Grape', 'Melon' ];
    static fruit5 = "Watermelon";
    get fruit6() {
        return ParentInputComponent.fruit5;
    }
}