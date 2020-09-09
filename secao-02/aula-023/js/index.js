let num1 = 9.623456789;
let num2;

// ARRENDODA PARA BAIXO
num2 = Math.floor(num1);
console.log(num2);

// ARRENDODA PARA CIMA
num2 = Math.ceil(num1);
console.log(num2);

// ARREDONDAMENTO AUTOMÁTICO
num2 = Math.round(num1);
console.log(num2);

// ACHAR O MAIOR NÚMERO DE UMA SEQUENCIA DE NÚMEROS
console.log(Math.max(1, 2, 3, 4, 5, 15, 9, -10, -5));

// ACHAR O MENOR NÚMERO DE UMA SEQUENCIA DE NÚMEROS
console.log(Math.min(1, 2, 3, 4, 5, 15, 9, -10, -5));

// GERAR NÚMERO ALEATÓRIO
const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);
console.log(Math.round(aleatorio));

// VALOR DE PÍ
console.log(Math.PI);

// POTENCIAÇÃO
console.log(Math.pow(2, 10));
console.log(2 ** 10);

// RAIZ QUADRADA
console.log(Math.sqrt(9));
console.log(9 ** (1 / 2));
console.log(9 ** 0.5);

// DIVISÃO POR ZERO
console.log(100 / 0);
