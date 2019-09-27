import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, mergeMap } from 'rxjs/operators';
import { createHttpGetObservable } from '../common/util';

@Component({
  selector: 'app-step012',
  templateUrl: './step012.component.html',
  styleUrls: ['./step012.component.css']
})
export class Step012Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const app$ = fromEvent(document.getElementById('inputSearch'), 'keyup').pipe(
        mergeMap((keyboardEvent: KeyboardEvent) =>
            createHttpGetObservable('api/pokemon?name=' + (<HTMLInputElement>keyboardEvent.target).value)
        )
    );
    app$.subscribe();
  }

}
