// Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100

let counterTwo = 0, counterThree = 0;
for (let i = 0; i <= 100; i++)
{
    if (i % 2 == 0)
    {
        counterTwo++;
    }

    if (i % 3 == 0)
    {
        counterThree++;
    }
}

console.log("Multiplos de 2: " + counterTwo + ". Multiplos de 3: " + counterThree);