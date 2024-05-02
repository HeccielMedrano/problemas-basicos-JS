const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function multiplesOfThree()
{
    readline.question('', number => { 
        if (/^[a-zA-Z]$/.test(number) == true)
        {
            console.log("No se ingreso un numero.\n");
            multiplesOfThree();
        }
        else
        {
            if (number <= 0)
            {
                console.log("Ingrese numeros mayores a 0.\n");
                multiplesOfThree();
            }
            else
            {
                for (let i = 1; i <= number; i++)
                {
                    if (i % 3 == 0)
                        console.log(i);
                }
                readline.close();
            }
        }
    });
}
    
multiplesOfThree();
