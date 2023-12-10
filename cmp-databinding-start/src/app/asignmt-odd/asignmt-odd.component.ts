import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-asignmt-odd',
    templateUrl: './asignmt-odd.component.html',
    styleUrl: './asignmt-odd.component.css'
})
export class AsignmtOddComponent {
    @Input()
    public num: number;
}
