const nome = 'Maria';
const sobrenome = 'Belizário';

const falaNome = () => `${nome} ${sobrenome}`;

console.log(module.exports);

// Maneira longa de exportar variáveis/funções globalmente

module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Maneira curta de exportar variáveis/funções globalmente

// exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// Usando This paara exportar variáveis/funções globalmente

this.qualquerCoisa = 'Qualquer Coisaaaa';

console.log(module.exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;
