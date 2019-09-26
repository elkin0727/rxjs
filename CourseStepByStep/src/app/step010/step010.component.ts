import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, concatMap } from 'rxjs/operators';
import { createHttpGetObservable } from '../common/util';

@Component({
  selector: 'app-step010',
  templateUrl: './step010.component.html',
  styleUrls: ['./step010.component.css']
})
export class Step010Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const app$ = fromEvent(document.getElementById('inputSearch'), 'keyup').pipe(
        concatMap((keyboardEvent: KeyboardEvent) =>
            createHttpGetObservable('api/pokemon?name=' + (<HTMLInputElement>keyboardEvent.target).value)
        )
    );

    app$.subscribe();
  }

}
