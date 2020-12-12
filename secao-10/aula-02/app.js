const Cachorro = require('../aula-02/b/c/d/mod');

const cachorrinho = new Cachorro('Dog.js');
cachorrinho.latir();

console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
