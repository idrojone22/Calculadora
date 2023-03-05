let operandoa;
let operandob;
let operacion;

let resultado = document.getElementById('resultado');
let reset = document.getElementById('botonC');

const sumar = document.getElementById('boton+');
const restar = document.getElementById('boton-');
const multiplicar = document.getElementById('boton*');
const dividir = document.getElementById('boton/');
const igual = document.getElementById('boton=');

// -> que puto asco de codigo 

let numero0 = document.getElementById('boton0'); // boton del nummero 0
let numero1 = document.getElementById('boton1'); // boton del nummero 1
let numero2 = document.getElementById('boton2'); // boton del nummero 2
let numero3 = document.getElementById('boton3'); // boton del nummero 3
let numero4 = document.getElementById('boton4'); // boton del nummero 4
let numero5 = document.getElementById('boton5'); // boton del nummero 5
let numero6 = document.getElementById('boton6'); // boton del nummero 6
let numero7 = document.getElementById('boton7'); // boton del nummero 7
let numero8 = document.getElementById('boton8'); // boton del nummero 8
let numero9 = document.getElementById('boton9'); // boton del nummero 9

numero0.addEventListener("click", () => {
  numero0 = 0;
  resultado.textContent = resultado.textContent + '0';
  console.log(resultado.textContent);
});

numero1.addEventListener("click", () => {
  numero1 = 1;
  resultado.textContent = resultado.textContent + '1';
  console.log(resultado.textContent);
});

numero2.addEventListener("click", () => {
  numero2 = 2;
  resultado.textContent = resultado.textContent + '2';
  console.log(resultado.textContent);
});

numero3.addEventListener("click", () => {
  numero3 = 3;
  resultado.textContent = resultado.textContent + '3';
  console.log(resultado.textContent);
});

numero4.addEventListener("click", () => {
  numero4 = 4;
  resultado.textContent = resultado.textContent + '4';
  console.log(resultado.textContent);
});

numero5.addEventListener("click", () => {
  numero5 = 5;
  resultado.textContent = resultado.textContent + '5';
  console.log(resultado.textContent);
});

numero6.addEventListener("click", () => {
  numero6 = 6;
  resultado.textContent = resultado.textContent + '6';
  console.log(resultado.textContent);
});

numero7.addEventListener("click", () => {
  numero7 = 7;
  resultado.textContent = resultado.textContent + '7';
  console.log(resultado.textContent);
});

numero8.addEventListener("click", () => {
  numero8 = 8;
  resultado.textContent = resultado.textContent + '8';
  console.log(resultado.textContent);
});

numero9.addEventListener("click", () => {
  numero9 = 9;
  resultado.textContent = resultado.textContent + '9';
  console.log(resultado.textContent);
});

sumar.addEventListener("click", () => {
  operandoa = resultado.textContent;
  operacion = '+';
  limpiar();
});

restar.addEventListener("click", () => {
  operandoa = resultado.textContent;
  operacion = '-';
  limpiar();
});

multiplicar.addEventListener("click", () => {
  operandoa = resultado.textContent;
  operacion = '*';
  limpiar();
});

dividir.addEventListener("click", () => {
  operandoa = resultado.textContent;
  operacion = '/';
  limpiar();
});

igual.addEventListener("click", () => {
  operandob = resultado.textContent;
  resolver()
});

reset.addEventListener("click" , () => {
  resetear()
})

function limpiar() {
  resultado.textContent = '';
}

function resetear() {
  resultado.textContent = '';
  operandoa = 0;
  operandob = 0;
  operacion = '';
}

function resolver(){
  let res = 0;
  switch(operacion) {
    case '+':
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case '-':
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case '*':
      res =  parseFloat(operandoa) * parseFloat(operandob);
      break;
    case '/':
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;  
  }
  resetear();
  resultado.textContent = res;
};