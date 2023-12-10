import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-asignmt-even',
    templateUrl: './asignmt-even.component.html',
    styleUrl: './asignmt-even.component.css'
})
export class AsignmtEvenComponent {
    @Input()
    public num: number;

}
