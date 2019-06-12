import { mockServices } from "./mock-data";
const fs = require('fs');
const mockyeahServer = require('mockyeah');

const jsonDB = JSON.parse(fs.readFileSync('server/db.json'));

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

mockyeahServer.get(mockServices.pokemon.path, { text: 'hello' });

function saveServer(){
    let data = JSON.stringify(jsonDB, null, 2);  
    fs.writeFile('server/db.json', data, function(err) {
		if(err) {
		   return console.log(err);
		}
		console.log("The file was generated and saved!");
    }); 	
}


