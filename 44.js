// Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que introduciremos por teclado.

const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput()
{
    readline.question('Ingresa el estado a buscar:\n', input => { 
        listRegister(input);
        readline.close();
    });
}

function listRegister(state) {
    let data = fs.readFileSync("DATOS.DAT", "utf8");
    let lines = data.split('\n');

    lines.forEach(line => {
        let fields = line.split(',');
        if (fields[4] === state) {
            console.log(line);
        }
    });
}

try {
    getInput();
} catch (error) {
    console.error('... :c', error);
}