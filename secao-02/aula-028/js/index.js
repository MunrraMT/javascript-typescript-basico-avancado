// DADOS PRIMITIVOS (IMUTÁVEL):
// STRING, NUMBER, BOOLEAN, UNDEFINED,  NULL (BIGINT, SYMBOL)

// VALOR FOI TROCADO E NÃO MODIFICADO
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);

// VALOR IMULTÁVEL
nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

// VALORES PRIMITIVOS SÃO COPIADOS
let a = 'A';
let b = a;
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);

console.log('');

// DADOS POR REFERÊNCIA (MUTÁVEL):
// ARRAYS, OBJECT, FUNCTION

let c = [1, 2, 3];
let d = c;
console.log(c, d);
c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);

console.log('');

// COPIA COM DADO POR REFERÊNCIA, PARA ARRAY
c = [1, 2, 3];
d = c;
let e = [...c]; //CÓPIA
console.log(c, d, e);
c.push(4);
console.log(c, d, e);

console.log('');

// COPIA COM DADO POR REFERÊNCIA, PARA OBJETOS
const pessoaA = {
	nome: 'Luiz',
	sobrenome: 'Otávio',
};
const pessoaB = pessoaA;
console.log(pessoaB, pessoaA);
pessoaA.nome = 'João';
console.log(pessoaB, pessoaA);
const pessoaC = { ...pessoaA }; //CÓPIA
pessoaA.nome = 'Maria';
console.log(pessoaB, pessoaA, pessoaC);
