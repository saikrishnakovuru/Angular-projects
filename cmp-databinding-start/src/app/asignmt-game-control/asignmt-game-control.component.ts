import {Component} from '@angular/core';

@Component({
    selector: 'app-asignmt-game-control',
    templateUrl: './asignmt-game-control.component.html',
    styleUrl: './asignmt-game-control.component.css'
})
export class AsignmtGameControlComponent {

    public nums: number[] = [];
    public interval: any;

    public onStartGame(): void {
        let value: number = 0;
        this.interval = setInterval(() => {

            value = value + 1;
            this.nums.push(value);
            console.log(this.nums);
        }, 1000);
    }

    public onStopGame(): void {
        clearInterval(this.interval);
    }

    public isEven(num: number): boolean {
        return num % 2 === 0;
    }

    public isOdd(num: number): boolean {
        return num % 2 !== 0;
    }
}
