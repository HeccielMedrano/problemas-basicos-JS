// Introducir un número menor de 5000 y pasarlo a numero romano

// Comprobar si un número mayor o igual que la unidad es primo.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput()
{
    readline.question('Introduce un numero:\n', input => { 
        let answer = "", accumulator = parseInt(input);
        if (accumulator == 0)
        {
            console.log("No puede representarse.");
        }
        else if (accumulator > 5000)
        {
            console.log("Valor muy alto.");
            getInput();
        }
        else
        {
            if (accumulator >= 1000)
            {
                answer += 'M'.repeat(parseInt(Math.abs(accumulator).toString().charAt(0)));
                accumulator = parseInt(accumulator.toString().substring(1));
            }
            if (accumulator >= 500)
            {
                answer += 'D'
                accumulator -= 500;
            }
            if (accumulator >= 100)
            {
                answer += 'C'.repeat(parseInt(Math.abs(accumulator).toString().charAt(0)));
                accumulator = parseInt(accumulator.toString().substring(1));
            }
            if (accumulator >= 50)
            {
                answer += 'L'
                accumulator -= 50;
            }
            if (accumulator >= 10)
            {
                answer += 'X'.repeat(parseInt(Math.abs(accumulator).toString().charAt(0)));
                accumulator = parseInt(accumulator.toString().substring(1));
            }
            if (accumulator >= 5)
            {
                answer += 'V'
                accumulator -= 5;
            }
            if (accumulator >= 1)
            {
                answer += 'I'.repeat(parseInt(Math.abs(accumulator).toString().charAt(0)));
                accumulator = parseInt(accumulator.toString().substring(1)) + 0;
            }

            console.log(answer);
            readline.close();
        }
    });
}

getInput();