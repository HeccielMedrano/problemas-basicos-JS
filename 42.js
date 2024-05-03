// Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.

const fs = require('fs');

function deleteRegister(registerId) {
    let data = fs.readFileSync("DATOS.DAT", "utf8");
    let lines = data.split('\n');
    let newLines = [];
    
    lines.forEach(line => {
        let fields = line.split(',');
        if (parseInt(fields[0]) !== registerId) {
            newLines.push(line);
        }
    });
    
    fs.writeFileSync("DATOS.DAT", newLines.join('\n'));
}

try {
    deleteRegister(0);
    console.log("El registro fue eliminado.");
} catch (error) {
    console.error('POR ALGUN MOTIVO NO SE BORRO, PON LOS DATOS BIEN, MALDITA SEA AAAAAAAAAAAAAAAAAAA', error);
}