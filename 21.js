// Hacer un programa que calcule independientemente la suma de los pares y los impares de los números entre 1 y 1000.

let evenSum = 0, oddSum = 0;

for (let i = 1; i <= 1000; i++)
{
    if (i % 2 == 0)
    {
        evenSum += i;
    }
    else 
    {
        oddSum += i;
    }
}

console.log("Suma de pares: " + evenSum + ". Suma de impares: " + oddSum + ".");