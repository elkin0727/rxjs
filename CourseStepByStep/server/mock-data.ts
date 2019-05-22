export const dataBaseMock = {
    pokemons: {
        'payload': [
            {
                name: 'Pikachu',
                nivel: 1
            },
            {
                name: 'Charmander',
                nivel: 1
            },
            {
                name: 'Raichu',
                nivel: 2
            },
            {
                name: 'Charmilion',
                nivel: 2
            }
        ]
    }
};


export const mockServices = {
    getPokemonsByName: {
        pattern: '/api/pokemons',
        ok: dataBaseMock.pokemons,
        ko: {
            status: 200,
            json: { errorCode: 'UnexpectedException' }
        }
    }
};

