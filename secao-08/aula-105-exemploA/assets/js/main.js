// XMLHttpRequest (GET)

const request = (obj) => {
	const xhr = new XMLHttpRequest();

	xhr.open(obj.method, obj.url, true);
	xhr.send();

	xhr.addEventListener('load', () => {
		if (xhr.status >= 200 && xhr.status < 300) {
			obj.success(xhr.responseText);
		} else {
			obj.error(xhr.statusText);
		}
	});
};

document.addEventListener('click', (event) => {
	event.preventDefault();
	const element = event.target;

	if (element.localName === 'a') return carregaPagina(element);
});

function carregaPagina(element) {
	const href = element.getAttribute('href');
	const objConfig = {
		method: 'GET',
		url: href,
		success(response) {
			carregaResultado(response);
		},
		error(errorText) {
			console.log(errorText);
		},
	};

	return request(objConfig);
}

function carregaResultado(response) {
	const resultado = document.querySelector('.resultado');
	return (resultado.innerHTML = response);
}
