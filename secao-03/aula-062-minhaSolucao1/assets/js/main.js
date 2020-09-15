function listaDeTarefas() {
	const form = document.querySelector('#nova-tarefa__form');
	const submit = document.querySelector('#nova-tarefa__btn');
	const div = document.querySelector('#tarefas');

	let ul = createUnorderList();

	submit.addEventListener('click', function (event) {
		event.preventDefault();

		const texto = form.querySelector('#nova-tarefa__input').value;
		let li = createList();
		let btn = createButton();
		ul.appendChild(li);

		if (typeof texto === 'string' && texto !== '') {
			li.innerText = texto;
			li.appendChild(btn);
		}

		div.appendChild(ul);
	});

	function createUnorderList() {
		const unorderedList = document.createElement('ul');
		return unorderedList;
	}

	function createList() {
		const list = document.createElement('li');
		return list;
	}

	function createButton() {
		const button = document.createElement('button');
		button.innerText = 'Apagar';
		return button;
	}
}
listaDeTarefas();
