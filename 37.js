// Cargar las notas de los alumnos de un colegio en función del número de cursos y del número de alumnos por curso.

let courses = 3;
let students = 5;
let grades = [];

for (let i = 1; i <= courses; i++) {
    let courseGrades = [];  

    for (let j = 1; j <= students; j++) {
        let grade = Math.floor(Math.random() * 98) + 1;
        grade = parseFloat(grade.toString().slice(0, 1) + '.' + grade.toString().slice(1));
        courseGrades.push(grade);
    }

    grades.push(courseGrades);
}

for (let i = 0; i < grades.length; i++) {
    console.log("Curso " + (i + 1) + ":");

    for (let j = 0; j < grades[i].length; j++) {
        console.log("Alumno " + (j + 1) + ": " + grades[i][j]);
    }
}