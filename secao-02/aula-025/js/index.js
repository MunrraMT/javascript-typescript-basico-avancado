let alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

// MODIFICANDO ARRAY MANUALMENTE POR ÍNDICE
alunos = ['Luiz', 'Maria', 'João'];
alunos[0] = 'Eduardo';
console.log(alunos);

// ADICIONA ELEMENTOS NO FINAL DO ARRAY USANDO INDICE INEXISTENTE
alunos = ['Luiz', 'Maria', 'João'];
alunos[3] = 'Luiza';
alunos[5] = 'André';
console.log(alunos);

// ADICIONA ELEMENTOS NO FINAL DO ARRAY USANDO LENGTH
alunos = ['Luiz', 'Maria', 'João'];
alunos[alunos.length] = 'Camila';
alunos[alunos.length] = 'Rodrigo';
console.log(alunos);

// ADICIONA ELEMENTOS NO FINAL DO ARRAY USANDO PUSH
alunos = ['Luiz', 'Maria', 'João'];
alunos.push('Luiza');
alunos.push('Fábio');
console.log(alunos);

// ADICIONA ELEMENTOS NO INÍCIO DO ARRAY USANDO UNSHIFT
alunos = ['Luiz', 'Maria', 'João'];
alunos.unshift('Luiza');
alunos.unshift('Fábio');
console.log(alunos);

// TAMANHO DO ARRAY
alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos.length);

// REMOVER ELEMENTOS NO FINAL DO ARRAY USANDO POP
alunos = ['Luiz', 'Maria', 'João'];
let removido = alunos.pop();
console.log(alunos);
console.log(removido);

// REMOVER ELEMENTOS NO INÍCIO DO ARRAY USANDO SHIFT
alunos = ['Luiz', 'Maria', 'João'];
removido = alunos.shift();
console.log(alunos);
console.log(removido);

// REMOVER ELEMENTO DO ARRAY USANDO DELETE, DEIXA O ÍNDICE VAZIO
alunos = ['Luiz', 'Maria', 'João'];
delete alunos[1];
console.log(alunos);

// OBTENDO ELEMENTOS DE UM ARRAY SEM EFEITO COLATERAL
alunos = ['Luiz', 'Maria', 'João'];
let novoArray = alunos.slice(0, 2);
console.log(novoArray);
console.log(alunos);
novoArray = alunos.slice(-2);
console.log(novoArray);
console.log(alunos);

// VERIFICANDO SE UM OBJETO É UM ARRAY
alunos = ['Luiz', 'Maria', 'João'];
console.log(typeof alunos);
console.log(alunos instanceof Array);
alunos = 30;
console.log(typeof alunos);
console.log(alunos instanceof Array);
