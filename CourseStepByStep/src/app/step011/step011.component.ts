import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { createHttpGetObservable } from '../common/util';

@Component({
  selector: 'app-step011',
  templateUrl: './step011.component.html',
  styleUrls: ['./step011.component.css']
})
export class Step011Component implements OnInit {

  constructor() { }

  ngOnInit() {

    const app$ = fromEvent(document.getElementById('inputSearch'), 'keyup').pipe(
        concatMap((keyboardEvent: KeyboardEvent) =>
            createHttpGetObservable('api/pokemon?name=' + (<HTMLInputElement>keyboardEvent.target).value)
        )
    );
    
  }

}
