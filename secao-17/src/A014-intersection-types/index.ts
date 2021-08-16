const intersectionTypes = (): void => {
  type TemNome = { nome: string };
  type TemSobrenome = { sobrenome: string };
  type TemIdade = { idade: number };

  type Pessoa = TemNome & TemSobrenome & TemIdade; // combinação obrigatória de tipos

  const pessoa: Pessoa = {
    // Preciso passar os 3
    idade: 30,
    nome: 'André',
    sobrenome: 'Rodrigues',
  };

  console.log(pessoa);

  type AB = 'A' | 'B';
  type AC = 'A' | 'C';
  type Intersecao = AB & AC; // Junta as semelhanças
};

intersectionTypes();
