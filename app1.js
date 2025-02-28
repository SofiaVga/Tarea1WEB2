let numeroMaquina = Math.floor(Math.random() * 10) + 1; 
console.log("Número de la máquina:", numeroMaquina); 
let vidas = 5; 

while (vidas > 0) {
    let numeroUsuario = parseInt(prompt("Ingresa un número del 1 al 10: ")); 
    if (numeroUsuario === numeroMaquina) {
        console.log("GANASTE");
        break; 
    } else {
        vidas--;
        console.log(`Incorrecto. Te quedan ${vidas} vidas.`);
    }
}

if (vidas === 0) {
    console.log("perdiste");
}
