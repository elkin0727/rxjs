import { mockServices } from "./mock-data";
const fs = require('fs');
const mockyeahServer = require('mockyeah');

let jsonDB = JSON.parse(fs.readFileSync('server/db.json'));

mockyeahServer.post(mockServices.pokemon.path, function (req, res) {
    const name = req.body["name"];

    setTimeout(() => {
        jsonDB.pokemons.push({
            name: name,
            nivel: 1
        });
        saveServer();
        res.status(200);
        res.send();
    }, 1000);
});

mockyeahServer.get(mockServices.pokemon.path, function (req, res){
    setTimeout(() => {
        let responseJSON;
        responseJSON = JSON.parse(fs.readFileSync('server/db.json'));
        if(isSearchPokemonByName(req)){
            responseJSON = getPokemonsByName(responseJSON, req.query['name']);
        }
        res.status(200);
        res.send(responseJSON);
    }, 1000);
});

function isSearchPokemonByName(request){
    return request.query['name'];
}


function getPokemonsByName(allPokemons, searchText){
    console.log(allPokemons.pokemons)
    return {
        pokemons: allPokemons.pokemons.filter((pokemon) => {
            return pokemon.name.indexOf(searchText) !== -1;
        })
    }
}

function saveServer(){
    let data = JSON.stringify(jsonDB, null, 2);  
    fs.writeFile('server/db.json', data, function(err) {
		if(err) {
		   return console.log(err);
		}
		console.log("The file was generated and saved!");
    }); 	
}


