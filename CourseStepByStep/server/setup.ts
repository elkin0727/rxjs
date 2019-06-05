const path = require("path");
const Server = require("mockyeah/server");
const fs = require('fs');
let jsonDB = JSON.parse(fs.readFileSync('server/db.json'));

import { mockServices, dataBaseMock } from "./mock-data";

const mockyeahServer = new Server({
    suitesDir: path.join("./server"),
    watch: true
});

mockyeahServer.post(mockServices.createPokemon.pattern, function (req, res) {
    console.log(req)
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

function saveServer(){
    let data = JSON.stringify(jsonDB);  
    fs.writeFileSync('server/db.json', data);  
}


