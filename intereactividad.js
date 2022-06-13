const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('operador');

const calculadora = new Calculadora();

console.log(calculadora.sumar(8,8));
console.log(calculadora.restar(5,3));
console.log(calculadora.sumar(5,5));
console.log(calculadora.sumar(10,2));



