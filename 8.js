const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function inputValidation()
{
    readline.question('', phrase => { 
        if (phrase.localeCompare("S") == 0|| phrase.localeCompare("N") == 0)
        {
            readline.close();
        }
        else
        {
            console.log("Solo se permite S o N.\n");
            inputValidation();
        }
    });
}
    
inputValidation();
