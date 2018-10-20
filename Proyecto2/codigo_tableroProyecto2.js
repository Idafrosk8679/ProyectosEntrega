var f = Number(prompt('Introduce numero de FILA'));
var c = Number(prompt('Introduce numero de COLUMNA'));
var tablero=CalcularTablero(f,c)


function CalcularTablero(f,c) {
  if  (f >= 1 && f <= 6){
    console.log('True');
  }else{
    console.log('False');
  }if (c >= 1 && c <= 6){
    console.log('True');
  }else{
    console.log('False');
  }
}
