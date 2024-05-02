// Comprobar si un número mayor o igual que la unidad es primo.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput()
{
    readline.question('Introduce un numero:\n', input => { 
        let prime = true;

        if (parseInt(input) <= 1)
        {
            prime = false;
        }
        else
        {
            for (let i = 2; i < parseInt(input); i++)
            {
                if (parseInt(input) % i == 0)
                {
                    prime = false;
                    break;
                }
            }
        }

        if (!prime)
            console.log(input + " no es primo");
        else
            console.log(input + " es primo");

        readline.close();
    });
}

getInput();