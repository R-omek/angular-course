import { animate, state, style, transition, trigger } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
    state('show', style({})),
    transition('void => show', [
        style({
            opacity: 0
        }),
        animate(1000, style({
            opacity: 1
        }))
    ]),
    transition('show => void', [
        style({
            opacity: 1
        }),
        animate(1000, style({
            opacity: 0
        }))
    ])
])