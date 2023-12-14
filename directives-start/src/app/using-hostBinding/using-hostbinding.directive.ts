import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector: '[app-bigFont]'
})
export class UsingHostBindingDirective {
    @HostBinding('class.big') isFontBigger: boolean = false;

    @HostListener('click')
    public changeSize(): void {
        this.isFontBigger = !this.isFontBigger;
    }
}