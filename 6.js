const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let number;
readline.question('', number => {
    number = parseInt(number);

    if (number <= 0)
        console.log("NA");
    else
    {
        for(let i = 1; i < number; i++)
        {
            console.log(i);
        }
    }                       
    readline.close();
});

