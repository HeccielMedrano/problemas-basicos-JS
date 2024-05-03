// Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
// en y calcule e imprima su media.

let grades = [9, 4, 2, 8, 8, 7.5, 3, 2, 5, 2];
let accumulator = 0.0;

for (let i = 0; i < grades.length; i++)
{
    accumulator += i;
}

console.log(accumulator/grades.length)