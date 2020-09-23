function recusiva(max) {
	if (max > 10) return;

	console.log(max);
	max++;

	recusiva(max);
}

recusiva(0);
