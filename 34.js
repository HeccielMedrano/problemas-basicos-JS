// Usando el segundo ejemplo, hacer un programa que busque una nota en la lista.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fileSystem = require('fs');

let grades = [], search = 0;
function getInput(phrase)
{
    readline.question(phrase, input => { 
        phrase = "Escribe una calificacion para escribir:\n";

        if (grades.length < 10)
        {
            if (/^[a-zA-Z]$/.test(input) == true)
            {
                console.log("No se ingreso un numero.");
                getInput(phrase);
            }
            else
            {
                grades.push(parseFloat(input));

                if (grades.length == 10)
                    phrase = "Escribe una calificacion para buscar:\n";

                getInput(phrase);
            }
        }
        else 
        {
            search = parseFloat(input), found = false;
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
                    if (parseFloat(line) == search)
                        found = true;
                });

                if (!found)
                    console.log("La calificacion no se encontro");
                else
                    console.log("La calificacion se encontro");
            });
            
            readline.close();
        }
    });
}

getInput("Escribe una calificacion para escribir:\n");