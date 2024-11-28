// variables
let eleccionMaquina;
const result = document.getElementById("result");
const scores = document.getElementById('scores');
const jugadas = ["piedra", "papel", "tijeras"];
let playerScore = 0;
let machineScore = 0;

function jugar(opcion) {
  eleccionMaquina = Math.round(Math.random() * 2);
  msj = "";
  var humano = jugadas[eleccionMaquina];
  var maquina = jugadas[opcion];

  if (humano === maquina) {
    // Empate
    msj = "Draw.";
  } else if (
    (humano == "piedra" && maquina == "tijeras") ||
    (humano == "papel" && maquina == "piedra") ||
    (humano == "tijera" && maquina == "papel")
  ) {
    playerScore++;
    msj = "Player wins.";
  } else {
    machineScore++;
    msj = "Machine wins.";
  }

  result.innerHTML = msj;
  scores.innerHTML = 'Player score: '+playerScore+' Machine score:'+machineScore;


}
