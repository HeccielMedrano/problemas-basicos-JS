// Ordenar una matriz de M filas y N columnas por la primera columna utilizando el método SHELL (por inserción).

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputIndex = 0, rows = 0, columns = 0;
let matrix = [];
function getInput()
{
    readline.question('', input => { 
        if (inputIndex == 0)
        {
            if (/^[a-zA-Z]$/.test(input) == true)
            {
                console.log("No se ingreso un numero.");
                getInput();
            }
            else
            {
                rows = parseInt(input);
                inputIndex++;
                console.log("Introducir columnas:");
                getInput();
            }
        }
        else if (inputIndex == 1)
        {
            if (/^[a-zA-Z]$/.test(input) == true)
            {
                console.log("No se ingreso un numero.");
                getInput();
            }
            else
            {
                columns = parseInt(input);

                for(i = 0; i < columns; i++)
                {
                    matrix[i] = [];
                    for(j = 0; j < rows; j++)
                    {
                        matrix[i][j] = Math.floor(Math.random() * 49) + 1;
                    }
                }
            }

            shellSort(matrix);

            for(i = 0; i < columns; i++)
            {
                for(j = 0; j < rows; j++)
                {
                    process.stdout.write(matrix[i][j] + " ");
                }
                process.stdout.write("\n");
            }
            readline.close();
        }
    });
}

function shellSort(matrix) {
    var n = matrix.length;
    
    for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        for (var i = gap; i < n; i++) {
            var temp = matrix[i];
            var j = i;

            while (j >= gap && matrix[j - gap][0] > temp[0]) {
                matrix[j] = matrix[j - gap];
                j -= gap;
            }
            matrix[j] = temp;
        }
    }
    return matrix;
}
    
console.log("Introducir cantidad de filas: ");
getInput();