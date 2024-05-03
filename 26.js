// Introducir una frase por teclado e imprimirla en el centro de la pantalla

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let width = process.stdout.columns;
function getInput()
{
    readline.question('Introduce una frase:\n', input => { 
        let spacingLeft = ' '.repeat(width / 2 - input.length);
        process.stdout.write(spacingLeft + input + "\n");

        readline.close();
    });
}

getInput();