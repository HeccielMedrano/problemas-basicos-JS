// Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e imprimirla.

for (let i = 0; i < 5; i++)
{
    for (let j = 0; j < 4; j++)
    {
        let random = Math.round(Math.random() * 99) + 1;

        process.stdout.write(random + " ");
    }
    process.stdout.write("\n");
}