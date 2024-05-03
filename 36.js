// Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su matriz transpuesta.

let originalMatrix = [], transpose = [];
for (let i = 0; i < 5; i++)
{
    originalMatrix[i] = [];
    for (let j = 0; j < 4; j++)
    {
        let random = Math.round(Math.random() * 99) + 1;
        originalMatrix[i][j] = random;
    }
}

for (let i = 0; i < 4; i++) {
    transpose[i] = [];
    for (let j = 0; j < 5; j++) {
        transpose[i][j] = originalMatrix[j][i];
        process.stdout.write(transpose[i][j] + " ");
    }
    process.stdout.write("\n");
}