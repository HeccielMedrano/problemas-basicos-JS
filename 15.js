// Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos números empezando por el más pequeño, contar cuántos hay y cuántos de ellos 
// son pares. Calcular la suma de los impares.

// Hacer un programa que imprima el mayor y el menor de una serie de cinco números que vamos introduciendo por teclado

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = new Array(2);
let currentNumberIndex = 0, biggest = 0, smallest = 0, totalNumber = 0, evenTotal = 0, oddSum = 0;
function twoNumbers()
{
    readline.question('', number => { 
        numbers[currentNumberIndex] = number;
        currentNumberIndex++;

        if (currentNumberIndex < 2)
        {
            twoNumbers();
        }
        else{
            if (numbers[0] > numbers[1])
            {
                biggest = numbers[0];
                smallest = numbers[1];
            }
            else
            {
                biggest = numbers[1];
                smallest = numbers[0];
            }

            for (let i = smallest; i <= biggest; i++)
            {
                if (i > 0)
                {
                    console.log(i);
                    totalNumber++;

                    if (i % 2 == 0)
                        evenTotal++;
                    else
                        oddSum += i;
                }
            }

            console.log("Hay " + totalNumber + " numeros naturales entre los dos numeros.\n" + evenTotal + " son pares.\n" + oddSum + " es la suma de los impares.");

            readline.close();
        }
    });
}
    
twoNumbers();
