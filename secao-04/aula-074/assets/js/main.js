// FUNÇÃO RECURSIVA

function recusiva(max) {
	if (max > 10) return;

	console.log(max);
	max++;

	recusiva(max);
}

recusiva(0);
/*
0
1
2
3
4
5
6
7
8
9
10
*/
