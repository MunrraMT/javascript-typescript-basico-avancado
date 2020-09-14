const paragrafos = document.querySelector('#paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
	console.log(p);
}

for (let p of ps) {
	console.log(p.innerHTML);
}
