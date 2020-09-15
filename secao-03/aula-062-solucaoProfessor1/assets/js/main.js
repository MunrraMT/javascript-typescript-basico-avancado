const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

adicionaTarefasSalvas();

btnTarefa.addEventListener('click', function () {
	addlist();
});

inputTarefa.addEventListener('keypress', function (e) {
	if (e.keyCode === 13) {
		addlist();
	}
});

document.addEventListener('click', function (e) {
	const el = e.target;
	if (el.classList.contains('apagar')) {
		el.parentElement.remove();
		salvarTarefas();
	}
});

function addlist() {
	if (!inputTarefa.value) return;
	criaTarefa(inputTarefa.value);
}

function criaTarefa(textoInput) {
	const li = criaLi();
	li.innerText = textoInput;
	tarefas.appendChild(li);
	limpaInput();
	criaBotaoApagar(li);
	salvarTarefas();
}

function criaLi() {
	const li = document.createElement('li');
	return li;
}

function limpaInput() {
	inputTarefa.value = '';
	inputTarefa.focus();
}

function criaBotaoApagar(li) {
	li.innerText += ' ';
	const botaoApagar = document.createElement('button');
	botaoApagar.innerText = 'Apagar';
	botaoApagar.setAttribute('class', 'apagar');
	botaoApagar.setAttribute('title', 'Apagar está tarefa');
	li.appendChild(botaoApagar);
}

function salvarTarefas() {
	const liTarefas = document.querySelectorAll('li');
	const listaDeTarefas = [];

	for (let tarefa of liTarefas) {
		let tarefaTexto = tarefa.innerText;
		tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
		listaDeTarefas.push(tarefaTexto);
	}

	const tarefasJSON = JSON.stringify(listaDeTarefas);
	localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
	const tarefas = localStorage.getItem('tarefas');
	const listaDeTarefas = JSON.parse(tarefas);

	for (let tarefa of listaDeTarefas) {
		criaTarefa(tarefa);
	}
}
