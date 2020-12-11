class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = 'Luiz';
const sobrenome = 'Miranda';

// exports.Pessoa = Pessoa;
module.exports = {
  nome,
  sobrenome,
  Pessoa,
};
