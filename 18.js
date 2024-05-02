// Hacer un programa que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputIndex = 0;
let amountOfAppearances = 0, letter = '', phrase = "";
function letters()
{
    readline.question('', input => { 
        if (inputIndex == 0)
        {
            if (/^[a-zA-Z]$/.test(input) == false || input.length > 1 || input.length < 0)
            {
                console.log("No se ingreso una letra, o se ingreso mas de un caracter.");
                letters();
            }
            else
            {
                letter = input;
                inputIndex++;
                console.log("Introducir frase:");
                letters();
            }
        }
        else if (inputIndex == 1)
        {
            phrase = input;

            for (let i = 0; i < phrase.length; i++)
            {
                if (phrase[i].toLowerCase().localeCompare(letter.toLowerCase()) == 0)
                    amountOfAppearances++;
            }

            console.log("La letra " + letter + " aparecio " + amountOfAppearances + " veces en el texto.");

            readline.close();
        }
    });
}
    
console.log("Introducir letra: ");
letters();