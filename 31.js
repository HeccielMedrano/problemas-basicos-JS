// Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen las siguientes operaciones: comprobar si es primo,
// hallar su factorial o imprimir su tabla de multiplicar.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputIndex = 0, number = 0;
function getInput()
{
    readline.question('', input => { 
        if (inputIndex == 0)
        {
            if (/^[a-zA-Z]$/.test(input) == true)
            {
                console.log("No se ingreso un numero.");
                getInput();
            }
            else
            {
                number = parseInt(input);
                inputIndex++;
                menu();
                getInput();
            }
        }
        else if (inputIndex == 1)
        {
            menu();
            switch (parseInt(input)) {
                case 1:
                    
                    let prime = true;

                    if (number <= 1)
                    {
                        prime = false;
                    }
                    else
                    {
                        for (let i = 2; i < number; i++)
                        {
                            if (parseInt(input) % i == 0)
                            {
                                prime = false;
                                break;
                            }
                        }
                    }
            
                    if (!prime)
                        console.log(number + " no es primo");
                    else
                        console.log(number + " es primo");

                    getInput();
                    break;

                case 2:
                    console.log(factorialRec(number));

                    getInput();
                    break;

                case 3:
                    for (let i = 1 ; i <= 10; i++)
                    {
                        console.log(number + " x " + i + " = " + number * i);
                    }

                    getInput();
                    break;

                case 4:
                    readline.close();
                    break;
                    
                default:
                    console.log("Opcion invalida");
                    getInput();
            }
        }
    });
}

function menu()
{
    console.clear();
    console.log("1. Primo o no\n2. Factorial\n3. Tabla de multiplicar\n4. Salir\n");
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

console.log("Introduce un numero:");
getInput();