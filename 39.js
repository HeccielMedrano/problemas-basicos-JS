// Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el segundo 2, el tercero 3 y así sucesivamente.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let matrix = [], count = 0, currentIndex = 1;
function getInput()
{
    readline.question('< = Pagina anterior. > = Pagina siguiente. 0 = Salir.\n', input => { 
        if (input.localeCompare("<") == 0)
        {
            if (currentIndex == 1)
            {
                console.log("No existe una pagina anterior a la actual.");
                getInput();
            }
            else
            {
                currentIndex--;
                menu(currentIndex);
                getInput();
            }
        }
        else if (input.localeCompare(">") == 0)
        {
            if (currentIndex == 3)
            {
                console.log("No existe una pagina anterior a la actual.");
                getInput();
            }
            else
            {
                currentIndex++;
                menu(currentIndex);
                getInput();
            }
        }
        else if (input.localeCompare("0") == 0)
        {
            console.clear();
            readline.close();
        }
        else
        {
            console.log("El valor no es valido.");
            getInput();
        }
    });
}

function generateData()
{
    for (let i = 0; i < 3; i++)
    {
        matrix[i] = [];
        for (let j = 0; j < 5; j++)
        {
            matrix[i][j] = [];
            for (let k = 0; k < 4; k++)
            {
                count++;
                matrix[i][j][k] = count;
            }
        }
    }
}

function menu(index)
{
    console.clear();
    console.log("PAGINA " + index + ":\n");

    for (let i = 0; i < 5; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            count++;
            process.stdout.write(matrix[(index - 1)][i][j] + " ");
        }
        process.stdout.write("\n");
    }
}

generateData();
menu(currentIndex);
getInput();