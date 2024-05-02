// Hacer un programa que simule el funcionamiento de un reloj digital y que permita ponerlo en hora.

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

function format(toFormat)
{
    if (toFormat.toString().length == 1)
        toFormat = "0" + toFormat.toString();
    return toFormat;
}

console.log(format(hours) + ":" + format(minutes) + ":" + format(seconds));