// Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los números pares por un lado, y por otro, la de todos los impares.

let counterPair = 0, counterOdd = 0;

for (let i = 0; i <= 100; i++)
{
    if (i % 2 == 0)
    {
        counterPair += i;
    }
    else
    {
        counterOdd += i;
    }
}

console.log("Pares: " + counterPair + ". Impares: " + counterOdd);