//

const fs = require('fs');

let exampleRegister = {
    ID: 0,
    NOMBRE: 'John',
    APELLIDOS: 'Doe',
    DIRECCION: 'The Backrooms',
    ESTADO: 'Creo que vivo pero no se'
};

function newRegister(register)
{
    let formattedRegister = register.ID + "," + register.NOMBRE + "," + register.APELLIDOS + "," + register.DIRECCION + "," + register.ESTADO + ",";

    fs.appendFileSync("DATOS.DAT", formattedRegister);
}

try {
    newRegister(exampleRegister);
    console.log("El registro fue agregado.");
} catch (error) {
    console.error('POR QUE NO SE REGISTRO??? QUE PASO????? AAAAAAAAAAAAAAAAAAA', error);
}