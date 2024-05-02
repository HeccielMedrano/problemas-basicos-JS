const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let counter = 1, biggest = -Infinity, smallest = Infinity;
function biggestAndSmallest()
{
    readline.question('', number => { 
        if (counter == 5)
        {
            if (number > biggest)
                biggest = number;
            if (number < smallest)
                smallest = number;

            console.log("Mayor: " + biggest + ". Menor: " + smallest + ".");
            readline.close();
        }
        else
        {
            if (/^[a-zA-Z]$/.test(number) == true)
            {
                console.log("No se ingreso un numero.\n");
                biggestAndSmallest();
            }
            else
            {
                counter++;
                
                if (number > biggest)
                    biggest = number;
                if (number < smallest)
                    smallest = number;

                biggestAndSmallest();
            }
        }
    });
}
    
biggestAndSmallest();
