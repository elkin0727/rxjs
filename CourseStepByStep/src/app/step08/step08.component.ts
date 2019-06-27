import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createHttpGetObservable } from '../common/util';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-step08',
  templateUrl: './step08.component.html',
  styleUrls: ['./step08.component.css']
})
export class Step08Component implements OnInit {

    pokemonsOneLevel$: Observable<Pokemon[]>;
    pokemonsTwoLevel$: Observable<Pokemon[]>;
    constructor() { }

    ngOnInit() {
        const http$ = createHttpGetObservable('api/pokemon');

        const pokemons$ = http$.pipe(
            tap(() => console.log('http response')),
            map((response: any) => response.pokemons),
            tap(console.log),
            shareReplay()
        );

        this.pokemonsOneLevel$ = pokemons$.pipe(
            map((pokemons: Pokemon[]) => pokemons.filter((pokemon: Pokemon) => pokemon.level === 1))
        );

        this.pokemonsTwoLevel$ = pokemons$.pipe(
            map((pokemons: Pokemon[]) => pokemons.filter((pokemon: Pokemon) => pokemon.level === 2))
        );
    }
}
