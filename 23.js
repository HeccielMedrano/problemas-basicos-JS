// Hacer un programa que imprima los números del 0 al 100, controlando las filas y las columnas.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputIndex = 0, rows = 0, columns = 0;
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
                rows = parseInt(input);
                inputIndex++;
                console.log("Introducir columnas:");
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
                columns = parseInt(input);

                count = 0;
                for(i = 0; i < columns; i++)
                {
                    for(j = 0; j < rows; j++)
                    {
                        if (count < 101)
                        {
                            process.stdout.write(count + " ");
                            count++;
                        }
                    }
                    process.stdout.write("\n");
                }

            }
            readline.close();
        }
    });
}
    
console.log("Introducir cantidad de filas: ");
getInput();