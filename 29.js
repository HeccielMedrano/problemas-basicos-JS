// Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10.

let counter = 0;
for (let i = 0; i < 100; i++)
{
    let random1 = Math.round(Math.random() * 5) + 1;
    let random2 = Math.round(Math.random() * 5) + 1;

    if (random1 + random2 == 10)
    {
        counter++;
    }
}

console.log("Salio una suma de 10 un total de: " + counter + " veces.");