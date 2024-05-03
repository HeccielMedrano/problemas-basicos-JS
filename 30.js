// Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputIndex = 0, number1 = 0, number2 = 0;
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
                number1 = parseInt(input);
                inputIndex++;
                console.log("Introducir otro numero:");
                getInput();
            }
        }
        else if (inputIndex == 1)
        {
            if (/^[a-zA-Z]$/.test(input) == true)
            {
                console.log("No se ingreso un numero.");
                getInput();
            }
            else
            {
                number2 = parseInt(input);
                inputIndex++;
                menu();
                getInput();
            }
        }
        else if (inputIndex == 2)
        {
            menu();
            switch (parseInt(input)) {
                case 1:
                    console.log(number1 + number2);
                    getInput();
                    break;
                case 2:
                    console.log(number1 - number2);
                    getInput();
                    break;
                case 3:
                    console.log(number1 * number2);
                    getInput();
                    break;
                case 4:
                    console.log(number1 / number2);
                    getInput();
                    break;
                case 5:
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
    console.log("1. Suma\n2. Resta\n3. Multiplicacio\n4. Division\n5. Salir\n");
}

console.log("Introduce un numero:");
getInput();