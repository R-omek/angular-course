import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBg]'
})
export class BgDirective implements OnInit {

    @Input('appBg') hoverColor: string = 'green'
    @Input() defaultColor: string = 'tranparent'

    @HostBinding('style.backgroundColor') background!: string

    constructor(
        // private element: ElementRef,
        // private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        this.background = this.defaultColor
    }

    @HostListener('mouseenter') mouseEnter(event: Event) {
        this.background = this.hoverColor
    }
    @HostListener('mouseleave') mouseLeave(event: Event) {
        this.background = this.defaultColor
    }
}
