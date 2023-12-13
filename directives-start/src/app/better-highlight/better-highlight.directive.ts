import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightBlue');
    }


    @HostListener('mouseenter', ['$event'])
    public mouseHover(eventData: Event): void {
        console.log(eventData);
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightBlue');
    }

    @HostListener('mouseleave', ['$event'])
    public mouseLeave(eventData: Event): void {
        console.log(eventData);
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightPink');
    }

}