let dato1 = Number(prompt("Ingresa un primer número: "));
let dato2 = Number(prompt("Ingresa un segundo número: "));
let dato3 = Number(prompt("Ingresa un tercer número: "));

if (dato1 >= dato2 && dato1 >= dato3) {
    console.log("El primer número es el más grande: " + dato1);
} else if (dato2 >= dato1 && dato2 >= dato3) {
    console.log("El segundo número es el más grande: " + dato2);
} else {
    console.log("El tercer número es el más grande: " + dato3);
}

if (dato1 === dato2 && dato2 === dato3) {
    console.log("Todos los números son iguales.");
} else {
    if (dato1 === dato2) console.log("El primer y segundo número son iguales.");
    if (dato1 === dato3) console.log("El primer y tercer número son iguales.");
    if (dato2 === dato3) console.log("El segundo y tercer número son iguales.");
}
   