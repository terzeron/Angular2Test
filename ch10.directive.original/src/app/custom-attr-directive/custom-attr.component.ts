import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-attr-directive',
    template: `
        <div [mystyle]="'Lavender'" [myfontsize]="'30px'">지시자 속성</div>
        <br>
        <div [style.background]="'Lavender'" [style.fontSize]="'30px'" [style.padding]="'10px'">고유 속성</div>
    `
})
export class CustomAttrDirectiveComponent { }