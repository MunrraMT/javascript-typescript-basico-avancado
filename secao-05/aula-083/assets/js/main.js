// FOREACH
// ITERA SOBRE UM ARRAY

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// SOLUÇÃO COM FOR
for (const valor of a1) {
	console.log(valor);
}
/*
10
20
30
40
50
60
70
80
90
*/

// SOLUÇÃO COM FOREACH 01
a1.forEach(function (valor, indice, arrayCompleto) {
	console.log(valor, indice);
});
/*
10 0
20 1
30 2
40 3
50 4
60 5
70 6
80 7
90 8
*/

// SOLUÇÃO COM FOREACH 02
a1.forEach((valor) => console.log(valor));
/*
10
20
30
40
50
60
70
80
90
*/
