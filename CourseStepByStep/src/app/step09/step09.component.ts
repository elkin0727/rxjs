import { Component, OnInit } from '@angular/core';
import { of, concat, interval } from 'rxjs';

@Component({
    selector: 'app-step09',
    templateUrl: './step09.component.html',
    styleUrls: ['./step09.component.css']
})
export class Step09Component implements OnInit {

    constructor() { }

    ngOnInit() {
        const source1$ = interval(1000);
        const source2$ = of(4, 5, 6);
        
        const result$ = concat(source1$, source2$);
        result$.subscribe(console.log);
    }

}
