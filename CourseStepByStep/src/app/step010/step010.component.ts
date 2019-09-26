import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-step010',
  templateUrl: './step010.component.html',
  styleUrls: ['./step010.component.css']
})
export class Step010Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const inputChangeSearch$ = fromEvent(document.getElementById('inputSearch'), 'keyup')
        .pipe(
            tap(console.log)
        );
    inputChangeSearch$.subscribe();

  }

}
