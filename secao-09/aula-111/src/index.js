import somaComArrowFunction, {
	nome2 as nomeModulo1,
	sobrenome,
	idade,
	soma,
	Pessoa as OutraPessoa,
} from './modulo1';

const nome = 'João';

console.log(nome, sobrenome, idade, soma(5, 5));
console.log(nomeModulo1);

const p1 = new OutraPessoa('André', 'Rodrigues');
console.dir(p1);
console.log(p1);

console.log(somaComArrowFunction(5, 25));
