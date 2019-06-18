import { Component, OnInit } from '@angular/core';
import { Observable, noop } from 'rxjs';
import { createHttpGetObservable } from '../common/util';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-step07',
  templateUrl: './step07.component.html',
  styleUrls: ['./step07.component.css']
})
export class Step07Component implements OnInit {
    
    pokemonsOneLevel$: Observable<Pokemon[]>;
    pokemonsTwoLevel$: Observable<Pokemon[]>;
    constructor() { }

    ngOnInit() {
        const http$ = createHttpGetObservable('api/pokemon');
        // http$.subscribe((response) => {
        //     console.log(response);
        // });

        const pokemons$ = http$.pipe(
            map((response: any) => response.pokemons)
        )

        this.pokemonsOneLevel$ = pokemons$.pipe(
            map((pokemons: Pokemon[]) => pokemons.filter((pokemon: Pokemon) => pokemon.level === 1))
        );

        this.pokemonsTwoLevel$ = pokemons$.pipe(
            map((pokemons: Pokemon[]) => pokemons.filter((pokemon: Pokemon) => pokemon.level === 2))
        );

        
    }

}
