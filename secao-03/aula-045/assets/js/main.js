// Atribuição via desestruturação (Arrays)

// CRIANDO VARIÁVEIS E ATRIBUINDO POR ARRAY
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const numeros = ['b', 'c', 'a'];
[a, b, c] = numeros;

console.log(a, b, c); // b c a

const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const primeiroNumero = numeros2[0];
console.log(primeiroNumero); // 1000

// USANDO OPERADOR REST(...) PARA PEGAR O RESTANTE DOS ELEMENTOS DE UM ARRAY
const [primeiroNumero2, segundoNumero2, terceiroNumero2, ...resto] = numeros2;
console.log(primeiroNumero2, segundoNumero2, terceiroNumero2); // 1000 2000 3000
console.log(resto); // [ 4000, 5000, 6000, 7000, 8000, 9000 ]

const [um, , tres, , cinco, , sete] = numeros2;
console.log(um, tres, cinco); // 1000 3000 5000

// CRIANDO VARIÁVEIS E ATRIBUINDO POR ARRAY DENTRO DE ARRAY
const numeros3 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(numeros3[1][2]); // 6

const [, [, , seis]] = numeros3;
console.log(seis); // 6

const [lista1, lista2, lista3] = numeros3;
console.log(lista3); // [ 7, 8, 9 ]
console.log(lista3[2]); // 9
