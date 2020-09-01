// Luiz Otávio Miranda tem 30 anos, pesa 84kg
// tem 1.8 de altura e seu IMC é de 25.925
// Luiz Otávio nasceu em...

const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 31;
const pesoEmKg = 84;
const alturaEmM = 1.8;

let imcCompleto;
let imcResumo;
let anoNascimento;
let frase;

imcCompleto = pesoEmKg / (alturaEmM * alturaEmM);

console.log('IMC Completo:', imcCompleto);

imcResumo = imcCompleto.toString().slice(0, 5);

anoNascimento = 2020 - idade;

frase = `${nome} ${sobreNome} tem ${idade} anos, pesa ${pesoEmKg}Kg tem ${alturaEmM}m de altura e seu IMC é de ${imcResumo}. ${nome} nasceu em ${anoNascimento}`;

console.log(frase);
