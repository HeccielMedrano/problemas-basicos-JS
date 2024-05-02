// Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos números empezando por el más pequeño, contar cuántos hay y cuántos de ellos 
// son pares. Calcular la suma de los impares.

// Hacer un programa que imprima el mayor y el menor de una serie de cinco números que vamos introduciendo por teclado

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = new Array(2);
let currentNumberIndex = 0, evenTotal = 0, evenSum = 0;
function twoNumbers()
{
    readline.question('', number => { 
        if (currentNumberIndex == 0)
        {
            numbers[currentNumberIndex] = number;
            currentNumberIndex++;
            twoNumbers();
        }
        else if (currentNumberIndex == 1)
        {
            numbers[currentNumberIndex] = number;
            
            if (numbers[currentNumberIndex] < numbers[currentNumberIndex - 1])
            {
                console.log("El numero introducido debe de ser mayor al anterior.")
                twoNumbers();
            }
            else
                currentNumberIndex++;
        }
        
        if (currentNumberIndex > 1){

            for (let i = numbers[0]; i <= numbers[1]; i++)
            {
                if (i % 2 == 0)
                {
                    console.log(i);
                    evenTotal++;
                    
                    evenSum += parseInt(i);
                }
            }

            console.log("\nHay " + evenTotal + " numeros multiplos de dos entre los dos numeros.\n" + evenSum + " es la suma de los impares.");
            readline.close();
        }
    });
}
    
twoNumbers();
