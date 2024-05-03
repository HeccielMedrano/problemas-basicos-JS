// Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
// en y calcule e imprima su media.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fileSystem = require('fs');

let grades = [];
function getInput()
{
    readline.question('', input => { 
        if (grades.length < 10)
        {
            if (/^[a-zA-Z]$/.test(input) == true)
            {
                console.log("No se ingreso un numero.");
                getInput();
            }
            else
            {
                grades.push(parseFloat(input));
                getInput();
            }
        }
        else 
        {
            let accumulator = 0;
            const data = grades.join('\n');

            fileSystem.writeFile('grades.txt', data, (err) => {
                if (err) throw err;
            });
            
            fileSystem.readFile('grades.txt', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                
                const lines = data.split('\n');
                
                lines.forEach(line => {
                    accumulator += parseFloat(lines);
                });

                console.log(accumulator/10);
            });
            
            readline.close();
        }
    });
}

getInput();