const typeAlias = (): void => {
  type Idade = number;

  type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
  type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
  type CorPreferida = CorRGB | CorCMYK; // Unir tipos

  type Pessoa = {
    name: string;
    lastName: string;
    age: Idade;
    salary: number;
    corPreferida?: CorPreferida;
  };

  const pessoa: Pessoa = {
    name: 'André',
    lastName: 'Rodrigues',
    age: 30,
    salary: 200_000, // Separação com underline
    corPreferida: 'Ciano',
  };

  console.log(pessoa.salary + 200);

  const setCorPreferida = (obj: Pessoa, cor: CorPreferida): Pessoa => ({
    ...obj,
    corPreferida: cor,
  });

  console.log(setCorPreferida(pessoa, 'Verde'));
  console.log(pessoa);
};

typeAlias();
