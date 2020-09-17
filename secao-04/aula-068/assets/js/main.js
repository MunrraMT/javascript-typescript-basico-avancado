// Funções de callback

function f1() {
	console.log('f1');
}
function f2() {
	console.log('f2');
}
function f3() {
	console.log('f3');
}
f1();
f2();
f3();
console.log('Olá mundo!');

// Função de CallBack - parte 01
function rand(min = 1000, max = 2000) {
	const num = Math.random() * (max - min) + min;
	return Math.round(num);
}
console.log(rand());
function f4() {
	setTimeout(function () {
		console.log('f4');
	}, rand());
}
function f5() {
	setTimeout(function () {
		console.log('f5');
	}, rand());
}
function f6() {
	setTimeout(function () {
		console.log('f6');
	}, rand());
}
f4();
f5();
f6();
console.log('Olá mundo!');

// Função de CallBack - parte 02
function f7(callback) {
	setTimeout(function () {
		console.log('f7');
		if (callback) callback();
	}, rand());
}
function f8(callback) {
	setTimeout(function () {
		console.log('f8');
		if (callback) callback();
	}, rand());
}
function f9(callback) {
	setTimeout(function () {
		console.log('f9');
		if (callback) callback();
	}, rand());
}

// Chamada de CallBackHell
f7(function () {
	f8(function () {
		f9(function () {
			console.log('Olá mundo!');
		});
	});
});

// Chamada de CallBack Ordenada
f7(f7CallBack);

function f7CallBack() {
	f8(f8CallBack);
}
function f8CallBack() {
	f9(f9CallBack);
}
function f9CallBack() {
	console.log('Olá mundo!');
}
