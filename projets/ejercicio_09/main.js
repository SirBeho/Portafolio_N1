function move(valor) {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= valor) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

// Obtener el elemento de la barra de vida

// Función para actualizar la barra de vida
function barra() {
    const vida = document.getElementById("vida").value;
    const barra_vida = document.getElementById("myBar");
    let new_vida = parseFloat(barra_vida.style.width) + parseFloat(vida);

    if (barra_vida.style.width == "") {
        barra_vida.style.width = "100%";
    }
    if (new_vida < 0) new_vida = 0;
    barra_vida.style.width = new_vida + "%";
}

// Ejemplo de uso: actualizar la barra de vida al 50%

function pokemon(vida, ataque, tipo) {
    this.vida = vida;
    this.ataque = ataque;
    this.tipo = tipo;
}

let pikachu = new pokemon(100, 20, "electrico");
let jiglet = new pokemon(100, 20, "tierra");
let turno = 1;

console.log(pikachu);
console.log(jiglet);

const iniciarPelea = document.getElementById("iniciarPelea").addEventListener("click", pelea);

function pelea() {
    console.log("Inicio Pelea");
    const botonPicachu = document.getElementById("botonPicachu").addEventListener("click", damage1);
    const botonJiglet = document.getElementById("botonJiglet").addEventListener("click", damage2);
}
//le quita vida a jiglet
function damage1() {
    let min = -10;
    let max = 10;
    let ataque = pikachu.ataque + Math.floor(Math.random() * (max - min + 1)) + min;

    if (turno == 1) {
        console.log("Pikachu atacando");
        jiglet.vida -= ataque;
        console.log("Ataque de " + ataque);
        barra(document.getElementById("bar_jiget"), ataque * -1);
        turno = 0;
    }
}
//le quita vida a pikachu
function damage2() {
    let min = -10;
    let max = 10;
    let ataque =  jiglet.ataque + Math.floor(Math.random() * (max - min + 1)) + min;

    if (turno == 0) {
        console.log("Pikachu atacando");
        pikachu.vida -= ataque;
        console.log("Ataque de " + ataque);
        barra(document.getElementById("bar_picachu"), ataque * -1);
        turno = 1;
    }
}

function Fin_juego() {
    console.log(pikachu.vida + " j: " + jiglet.vida);

    if (pikachu.vida < 1) {
        turno = 2;
        console.log("El ganador es Jiglet");
    } else if (jiglet.vida < 1) {
        turno = 2;
        console.log("El ganador es Pikachu");
    }
    console.log(turno);
}

function barra(barra_vida, vida) {
    if (barra_vida.style.width == "") {
        barra_vida.style.width = "100%";
    }

    let new_vida = parseFloat(barra_vida.style.width) + parseFloat(vida);
    //console.log("restas:" +new_vida);
    if (new_vida < 0) new_vida = 0;

    // console.log("resta:" +new_vida);

    barra_vida.textContent = new_vida;

    barra_vida.style.width = new_vida + "%";

    Fin_juego();
}
