// Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el campo ID. Crear un programa que nos permita consultar un registro siempre que queramos.

const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput()
{
    readline.question('Ingresa el ID a buscar:\n', input => { 
        listRegister(input);
        readline.close();
    });
}

function listRegister(id) {
    let data = fs.readFileSync("DATOS.DAT", "utf8");
    let lines = data.split('\n');

    lines.forEach(line => {
        let fields = line.split(',');
        if (fields[0] === id) {
            console.log(line);
        }
    });
}

try {
    getInput();
} catch (error) {
    console.error('Oh noooooooooooooooooooooooooooooooooooooooooooooooooo', error);
}