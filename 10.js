const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function pairOrNot()
{
    readline.question('', number => { 
        if (/^[a-zA-Z]$/.test(number) == false && number % 2 == 0)
        {
            console.log("Este numero es par.");
        }
        else if (/^[a-zA-Z]$/.test(number) == false && number % 2 != 0)
        {
            console.log("Este numero es impar.");
        }
        else
        {
            console.log("Este no es un numero.");
        }
        readline.close();
    });
}
    
pairOrNot();
