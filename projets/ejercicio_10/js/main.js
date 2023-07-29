// Definir jugadores
let player1 = {
  name: "X",
  mov: "",
};
let player2 = {
  name: "O",
  mov: "",
};
let turno = true;

//jugadas ganadoras
const jugadasGanadoras = [
  "123",
  "456",
  "789",
  "147",
  "258",
  "369",
  "159",
  "357",
];

// Llamar elementos a usar del DOM

const turnoDe = $(".turno_de");
const campos = $all(".campo");
console.log(campos);

// ejecucion inicial
setTurnoDe();

// Escuchar el click en cada boton
campos.forEach((campo, idx) => {
  campo.addEventListener("click", () => {
    const player = currentPlayer();
    campo.textContent = player.name;

    // añadir su movimiento
    player.mov += (idx + 1).toString();

    if(isWinner(player)) {
      alert("tenemos un ganador!")
    }
    

    // ejecuta el cambio de turno
    changeTurn();
    setTurnoDe();
  });
});

function ordenaString(str) {
  let arr = str.split('');
  arr.sort();
  return arr.join('')
};

function currentPlayer() {
  return turno ? player1 : player2;
}

// Detecta si hay ganador
function isWinner(player) {

  let mov = ordenaString(player.mov);
  // return jugadasGanadoras.some( jugada => mov.include(jugada));
  return jugadasGanadoras.some( jugada => {
    // convierto a mov en array / [1, 4, 6 , 7]  
    let arrMov = mov.split(''); 

    // convierto a jugada en array [1, 4, 7]
    let arrJugada = jugada.split('');

    // comparo si todos los movimientos ganadores fueron
    // hechos por el jugador
    return arrJugada.every(char => arrMov.includes(char))
  });


}

// funcion para modificar el turno en HTML
function setTurnoDe() {
  turnoDe.textContent = currentPlayer().name;
}

// funcion para cambiar de turno

function changeTurn() {
  turno = !turno;
}

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}
