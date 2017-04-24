import { Component } from '@angular/core';

@Component({
    selector: 'parent',
    template: `<div>
        Parent
        <child></child>
        </div>`,
    styles: [ `div { border: 2px dotted #666; padding: 10px; margin-top: 5px; width: 400px; height: 200px; }` ]
})
export class ParentComponent { }