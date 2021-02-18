const mongoose = require('mongoose');
const validator = require('validator');
const date = new Date();

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: Number('') },
  criadoEm: {
    type: Object,
    default: {
      'pt-BR': date.toLocaleString('pt-BR'),
      'en-US': date.toLocaleString('en-US'),
      DateNumber: Date.now(),
    },
  },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.buscaPorId = async function (id) {
  if (typeof id !== 'string') return;
  const contato = await ContatoModel.findById(id);
  return contato;
};
Contato.prototype.register = async function () {
  this.valida();
  if (this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function () {
  this.cleanUp();
  // validação
  // O email precisa ser válido
  if (this.body.email && !validator.isEmail(this.body.email)) {
    this.errors.push('E-mail inválido!');
  }
  if (!this.body.nome) this.errors.push('Nome é um campo obrigatório');
  if (!this.body.email && !this.body.telefone) {
    this.errors.push(
      'Pelo menos uma forma de contato precisa ser vinculado ao nome',
    );
  }
};

Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      his.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

module.exports = Contato;
