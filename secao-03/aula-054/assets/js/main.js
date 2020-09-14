const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros) {
	if (numero === 2 || numero === 3) {
		continue;
	}

	if (numero === 5) {
		continue;
	}

	console.log(numero);
}
/*
1
4
6
7
8
9
*/

for (let numero of numeros) {
	if (numero === 2) {
		console.log('Pulei o 2');
		continue;
	}

	console.log(numero);

	if (numero === 7) {
		console.log('Encontrado o 7');
		break;
	}
}
/*
1
Pulei o 2
3
4
5
6
7
Encontrado o 7
*/
