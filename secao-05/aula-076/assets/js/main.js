const nomes1 = ['Eduardo', 'Maria', 'Joana'];
nomes1[2] = 'João';
console.log(nomes1); // [ 'Eduardo', 'Maria', 'João' ]
delete nomes1[2];
console.log(nomes1); // [ 'Eduardo', 'Maria', <1 empty item> ]

// CÓPIA COMO REFERÊNCIA
const nomes2 = ['Eduardo', 'Maria', 'Joana'];
const novo2 = nomes2;
novo2.pop();
console.log(nomes2); // [ 'Eduardo', 'Maria' ]
console.log(novo2); // [ 'Eduardo', 'Maria' ]

// CÓPIA SEM REFERÊNCIA
const nomes3 = ['Eduardo', 'Maria', 'Joana'];
const novo3 = [...nomes3];
novo3.pop();
console.log(nomes3); // [ 'Eduardo', 'Maria', 'Joana' ]
console.log(novo3); // [ 'Eduardo', 'Maria' ]

// TRANSFORMA ARRAY EM STRING
const nomes4 = ['Eduardo', 'Maria', 'Joana'];
const novo4A = nomes4.join(); // Sem escolher o separador, ele usa a vírgula.
console.log(novo4A); // Eduardo,Maria,Joana
const novo4B = nomes4.join(' '); // Escolhendo como separador, o espaço.
console.log(novo4B); // Eduardo Maria Joana
