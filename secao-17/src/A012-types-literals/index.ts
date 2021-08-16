const typesLiterals = (): void => {
  let x = 10;
  x = 0b1010;

  const y = 10;

  let a = 100 as const;
  a = 100;

  const person = {
    name: 'André' as const, // bloqueia mudanças em tempo de desenvolvimento
    lastName: 'Rodrigues',
  };

  const escolhaCor = (cor: 'Vermelho' | 'Amarelo' | 'Azul'): string => {
    if (cor === 'Vermelho') return 'RED';
    if (cor === 'Amarelo') return 'YELLOW';

    return 'BLUE';
  };

  console.log(escolhaCor('Vermelho'));
};

typesLiterals();
