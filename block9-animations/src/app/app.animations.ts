import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
    transition(':enter', [
        style({
            height: '*',
            width: '*'
        }),
        group([
            animate(3000, style({
                height: '200px',
                width: '200px'
            })),
            animate(6000, keyframes([
                style({backgroundColor: 'blue'}),
                style({backgroundColor: 'yellow'}),
                style({backgroundColor: 'black'}),
            ]))
        ]),
        animate(1000)
    ]),
    transition(':leave', [
        style({
            opacity: 1
        }),
        animate(1000, style({
            opacity: 0
        }))
    ])
])
