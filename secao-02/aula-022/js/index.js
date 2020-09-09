// IEEE 754-2008

let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1);

num1 = num1.toString();

console.log(num1);
console.log(typeof num1);

num1 = 10.56789876567;
console.log(num1.toFixed(2));
console.log(typeof num1.toFixed(2));

num1 = 10;
console.log(Number.isInteger(num1));
num1 = 10.5;
console.log(Number.isInteger(num1));

let temp = num1 * 'Olá';
console.log(temp);
console.log(Number.isNaN(temp));
temp = num1 * '10';
console.log(Number.isNaN(temp));

num1 = 0.7;
num2 = 0.1;
console.log(num1 + num2);
num1 += num2;
num1 += num2;
num1 += num2;
console.log(num1);
num1 = num1.toFixed(2);
console.log(typeof num1);
console.log(Number.isInteger(1.0));
console.log(Number.isInteger(num1));
console.log(num1);
num1 = Number(num1);
console.log(typeof num1);
console.log(num1);
console.log(Number.isInteger(num1));
// CORRIGINDO IMPRECISÃO DE PONTOS FLUTUANTES
num1 = Number(num1.toFixed(2));
console.log(num1);
// CORRIGINDO IMPRECISÃO DE PONTOS FLUTUANTES
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 = Number(num1.toFixed(2));
console.log(num1);
// CORRIGINDO IMPRECISÃO DE PONTOS FLUTUANTES
num1 = 0.7;
num2 = 0.1;
num1 = (num1 * 100 + num2 * 100) / 100;
num1 = (num1 * 100 + num2 * 100) / 100;
num1 = (num1 * 100 + num2 * 100) / 100;
console.log(num1);
// CORRIGINDO IMPRECISÃO DE PONTOS FLUTUANTES
