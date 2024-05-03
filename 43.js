// Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones cuantas veces deseemos

const fs = require('fs');

function updateRegister(registerId, updatedRegister) {
    let data = fs.readFileSync("DATOS.DAT", "utf8");
    let lines = data.split('\n');
    let newLines = [];

    lines.forEach(line => {
        let fields = line.split(',');
        if (parseInt(fields[0]) === registerId) {
            fields[1] = updatedRegister.NOMBRE;
            fields[2] = updatedRegister.APELLIDOS;
            fields[3] = updatedRegister.DIRECCION;
            fields[4] = updatedRegister.ESTADO;

            let updatedLine = fields.join(',');
            newLines.push(updatedLine);
        } else {
            newLines.push(line);
        }
    });

    fs.writeFileSync("DATOS.DAT", newLines.join('\n'));
}

try {
    let updatedRegister = {
        ID: 0,
        NOMBRE: 'Saul',
        APELLIDOS: 'Goodman',
        DIRECCION: 'no se no vi better call saul',
        ESTADO: 'vivo pero en carcel hasta el fin de sus dias'
    };

    updateRegister(0, updatedRegister);
    console.log("El registro fue modificado.");
} catch (error) {
    console.error('okay ahora no te voy a gritar pero que sepas que igual no funciono :c', error);
}