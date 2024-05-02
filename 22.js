// Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada impresión ir desplazada cuatro columnas hacia la derecha.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function getInput()
{
    readline.question('Frase:\n', input => { 
        for (let i = 0; i < 5; i++)
        {
            for (j = 0; j < (i* 4); j++)
            {
                process.stdout.write(" ");
            }
            process.stdout.write(input + "\n");
        }

        readline.close();
    });
}

getInput();