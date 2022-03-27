const axios = require('axios');
const { nome, sobrenome, falaNome } = require('./mod1');
const { Pessoa } = require('./mod1');

console.log(falaNome());

//

const p1 = new Pessoa('André');

console.log(p1);

//

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then((response) => console.log(response))
  .catch((e) => console.log(e));
