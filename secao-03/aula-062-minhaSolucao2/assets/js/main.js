function listaDeTarefas() {
	const form = document.querySelector('#nova-tarefa__form');
	const submit = document.querySelector('#nova-tarefa__btn');
	const div = document.querySelector('#tarefas');

	let listaDeTarefas = [];
	let ul = createUnorderList();

	div.appendChild(ul);

	submit.addEventListener('click', function (event) {
		event.preventDefault();

		const texto = form.querySelector('#nova-tarefa__input').value;

		listaDeTarefas.push(texto);
		addMsg();
	});

	function addMsg() {
		let li;
		for (const i of listaDeTarefas) {
			let btn = createButton();
			li = createList();
			li.innerText = i;
			li.appendChild(btn);
		}
		ul.appendChild(li);
	}

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
