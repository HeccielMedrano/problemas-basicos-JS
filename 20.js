// Calcular el factorial de un número, mediante funciones.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let result = 1;
function getInput()
{
    readline.question('Numero a sacarle factorial:\n', input => { 
        if (/^[a-zA-Z]$/.test(input) == true)
        {
            console.log("No se ingreso un numero.");
            getInput();
        }
        else
        {
            console.log(factorialRec(input));
            readline.close();
        }
    });
}

function factorialRec(number)
{
    if (number == 0)
    {
        return 1;
    }
    else
    {
        result = number * factorialRec(number - 1)
        return result;
    }
}

getInput();



