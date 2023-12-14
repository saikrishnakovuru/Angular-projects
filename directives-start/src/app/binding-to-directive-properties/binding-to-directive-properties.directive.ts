import {Directive, HostBinding, HostListener, Input, OnInit} from "@angular/core";

@Directive({
    selector: '[appBindingDirectiveProps]'
})
export class BindingToDirectivePropertiesDirective implements OnInit {
    @Input()
    public defaultColor: string;
    @Input()
    public highlightColor: string;
    @HostBinding('style.backgroundColor')
    public backgroundColor: string;


    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseover')
    public onMouseOver(): void {
        console.log('mouse hovered');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave')
    public onMouseLeave(): void {
        console.log('mouse left');
        this.backgroundColor = this.defaultColor;
    }
}