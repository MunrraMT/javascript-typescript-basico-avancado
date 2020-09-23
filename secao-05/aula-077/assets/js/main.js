// MÉTODO SPLICE
// .splice( ÍNDICE, DELETE )
// .splice( QUAL ÍNDICE VAI ATUAR, QUANTOS ELEMENTOS VÃO SER REMOVIDOS )

// REMOVER ELEMENTO DO ARRAY
let nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
nomes.splice(4, 1); // Remover elemento 'Julia'.
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]

// OBTER UM ELEMENTO REMOVIDO DO ARRAY
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
let removidos = nomes.splice(4, 1); // Obter elemento 'Julia'.
console.log(removidos); // [ 'Julia' ]

// OBTER VÁRIOS ELEMENTOS REMOVIDOS DO ARRAY
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
removidos = nomes.splice(3, 2); // Obter elemento 'Gabriel' e 'Julia'.
console.log(removidos); // [ 'Gabriel', 'Julia' ]

// USANDO ÍNDICE NEGATIVO
//          0        1        2          3          4   ->   Índice Positivo
//         -5       -4       -3         -2         -1   ->   Índice Negativo
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
removidos = nomes.splice(-1, 1); // Obter elemento 'Julia'.
console.log(removidos); // [ 'Julia' ]

nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
removidos = nomes.splice(-2, 1); // Obter elemento 'Gabriel'.
console.log(removidos); // [ 'Gabriel' ]

nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
removidos = nomes.splice(-3, 2); // Obter elemento 'Eduardo' e 'Gabriel'.
console.log(removidos); // [ 'Eduardo', 'Gabriel' ]

nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
removidos = nomes.splice(-3, nomes.length); // Obter todos os elementos depois do índice -3.
console.log(removidos); // [ 'Eduardo', 'Gabriel', 'Julia' ]

// ADICIONANDO UM NOVO ELEMENTO NO ÍNDICE PASSADO POR ARGUMENTO
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
nomes.splice(3, 0, 'André'); // Adicionar elemento 'André', antes do elemento 'Gabriel'.
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'André', 'Gabriel', 'Julia' ]

// ADICIONANDO NOVOS ELEMENTOS NO ÍNDICE PASSADO POR ARGUMENTO
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
nomes.splice(3, 0, 'André', 'Camila'); // Adicionar elemento 'André', antes do elemento 'Gabriel'.
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'André', 'Camila', 'Gabriel', 'Julia' ]

// TROCANDO UM ELEMENTO NO ÍNDICE PASSADO POR ARGUMENTO
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
removidos = nomes.splice(3, 1, 'André'); // Trocar 'Gabriel' por 'André'.
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'André', 'Julia' ]
console.log(removidos); // [ 'Gabriel' ]

// TROCANDO VÁRIOS ELEMENTO DE UM ARRAY
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
removidos = nomes.splice(3, 2, 'André', 'Camila'); // Trocar o elemento 'Gabriel' e 'Julia', por 'André' e 'Camila'
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'André', 'Camila' ]
console.log(removidos); // [ 'Gabriel', 'Julia' ]

// USANDO SPLICE() COMO PUSH()
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
nomes.splice(nomes.length, 0, 'André', 'Camila'); // Adicionar 'André' e 'Camila' ao final do Array
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Julia', 'André', 'Camila' ]

// USANDO SPLICE() COMO UNSHIFT()
nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
nomes.splice(0, 0, 'André', 'Camila'); // Adicionar 'André' e 'Camila' ao final do Array
console.log(nomes); // [ 'André', 'Camila', 'Maria', 'João', 'Eduardo', 'Gabriel', 'Julia' ]
