// COPIANDO UM OBJETO COM SPREAD OPERATOR
// Não cria cópia como referência
let produto = { nome: 'Caneca', preco: 1.8 };
let outraCoisa = { ...produto, material: 'couro' };

produto.nome = 'Bola';

console.log(produto); // { nome: 'Bola', preco: 1.8 }
console.log(outraCoisa); // { nome: 'Caneca', preco: 1.8, material: 'couro' }

// COPIANDO UM OBJETO COM Object.assign()
// Não cria cópia como referência
produto = { nome: 'Caneca', preco: 1.8 };
outraCoisa = Object.assign({}, produto, { material: 'couro' });

produto.nome = 'Bola';

console.log(produto); // { nome: 'Bola', preco: 1.8 }
console.log(outraCoisa); // { nome: 'Caneca', preco: 1.8, material: 'couro' }

// Object.getOwnPropertyDescriptor()
// Mostra as configurações de uma propriedade de um objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
/*
{
    value: 'Bola',
    writable: true, <<<
    enumerable: true,
    configurable: true
}
*/

// Object.defineProperty()
// MODIFICA CONFIGURAÇÕES DA PROPRIEDADE DO OBJETO
Object.defineProperty(produto, 'nome', {
	writable: false,
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
/*
{
    value: 'Bola',
    writable: false, <<<
    enumerable: true,
    configurable: true
}
*/

// RETORNAR ARRAY COM VALORES DAS PROPRIEDADES DE UM OBJETO

// FUNÇÃO EM ESTADO EXPERIMENTAL = (93.98% de Compatibilidade de Navegadores)
produto = { nome: 'Caneca', preco: 1.8, material: 'porcelana' };
console.log(Object.values(produto)); // [ 'Caneca', 1.8, 'porcelana' ]

// MESMA SOLUÇÃO COM (FOR OF)
produto = { nome: 'Caneca', preco: 1.8, material: 'porcelana' };
const arrayDeValores = [];
for (const i in produto) {
	arrayDeValores.push(produto[i]);
}
console.log(arrayDeValores); // [ 'Caneca', 1.8, 'porcelana' ]

// RETORNAR ARRAY DE CHAVES E VALORES DAS PROPRIEDADES DE UM OBJETO

// FUNÇÃO EM ESTADO EXPERIMENTAL = (93.98% de Compatibilidade de Navegadores)
produto = { nome: 'Caneca', preco: 1.8, material: 'porcelana' };
console.log(Object.entries(produto)); // [ [ 'nome', 'Caneca' ], [ 'preco', 1.8 ], [ 'material', 'porcelana' ] ]

// EM ARRAYS SEPARADOS POR CHAVE/VALOR
for (const entry of Object.entries(produto)) {
	console.log(entry);
}
/*
[ 'nome', 'Caneca' ]
[ 'preco', 1.8 ]
[ 'material', 'porcelana' ]
*/

// EM ARRAY COM TODAS AS CHAVES DO OBJETO
const chavesProduto = [];
for (const i in produto) {
	chavesProduto.push(i);
}
console.log(chavesProduto); // [ 'nome', 'preco', 'material' ]
