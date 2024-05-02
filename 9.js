const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function positiveOrNegative()
{
    readline.question('', number => { 
        if (number == 0)
        {
            console.log("Este numero no es ni positivo ni negativo. Es cero. Porque asi funcionan las matematicas. Yo no hice las reglas, perdon.");
        }
        else if (number >= 0)
        {
            console.log("El numero es positivo.");
        }
        else
        {
            console.log("El numero es negativo.");
        }
        readline.close();
    });
}
    
positiveOrNegative();
