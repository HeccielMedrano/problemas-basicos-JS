// Realizar la tabla de multiplicar de un numero entre 0 y 10.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function getInput()
{
    readline.question('Introduce un numero:\n', input => { 
        if (parseInt(input) < 0 || parseInt(input) > 10)
        {
            console.log("Valor invalido.");
            getInput();
        }
        else
        {
            for (let i = 1 ; i <= 10; i++)
            {
                console.log(input + " x " + i + " = " + (parseInt(input) * i));
            }

            readline.close();
        }
    });
}

getInput();