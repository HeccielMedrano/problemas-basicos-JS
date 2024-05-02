const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let counter = 0;
function frasesIlimitadas()
{
    readline.question('0 para salir:\n', phrase => { 
        if (phrase.localeCompare("0") == 0) 
        {
            console.log("Se dijeron " + counter + " frases en total.");
            readline.close();
        }
        else
        {
            counter++;
            frasesIlimitadas();
        }
    });
}
    
frasesIlimitadas();
