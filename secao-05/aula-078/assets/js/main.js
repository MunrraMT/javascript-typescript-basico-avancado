// CONCATENANDO ARRAYS

// MANEIRA ERRADA DE CONCATENAR
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
let num3 = num1 + num2;
console.log(num3); // 1,2,34,5,6 ERROR

// USANDO CONCAT() PARA UNIR ARRAYS
num3 = num1.concat(num2);
console.log(num3); // [ 1, 2, 3, 4, 5, 6 ]

// USANDO CONCAT() PARA ADICIONAR ELEMENTOS
num3 = num1.concat(num2, [7, 8, 9], 'André', 'Camila');
console.log(num3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'André', 'Camila' ]

// USANDO SPREAD OPERATOR( ...) PARA ADICIONAR ELEMENTOS
num3 = [...num1, ...num2, ...[7, 8, 9], 'André', 'Camila']; // Precisa ser usado como prefixo de um Array.
console.log(num3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'André', 'Camila' ]
