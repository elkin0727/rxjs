import { Component, OnInit } from '@angular/core';
import { createHttpGetObservable } from '../common/util';
import { map } from 'rxjs/internal/operators/map';
import { noop } from 'rxjs';

@Component({
    selector: 'app-step06',
    templateUrl: './step06.component.html',
    styleUrls: ['./step06.component.css']
})
export class Step06Component implements OnInit {

    pokemonsOneLevel: Pokemon[];
    pokemonsTwoLevel: Pokemon[];
    constructor() { }

    ngOnInit() {
        const http$ = createHttpGetObservable('api/pokemon');
        // http$.subscribe((response) => {
        //     console.log(response);
        // });

        const pokemons$ = http$.pipe(
            map((response: any) => response.pokemons)
        )
        pokemons$.subscribe((pokemons: Pokemon[]) => {
            this.pokemonsOneLevel = pokemons
                .filter((pokemon: Pokemon) => pokemon.level === 1);

            this.pokemonsTwoLevel = pokemons
                .filter((pokemon: Pokemon) => pokemon.level === 2);
        },
        noop,
        () => console.log('completed'));
    }

}
