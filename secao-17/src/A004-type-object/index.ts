const typeObject = (): void => {
  const objetoA: {
    readonly chaveA: string; // A chave não pode ser alterada
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
  } = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
  };

  console.log(objetoA);

  objetoA.chaveB = 'Outra chave';
  objetoA.chaveC = 'Nova chave';

  console.log(objetoA);

  objetoA.chaveD = 'Nova chave2';

  console.log(objetoA);
};

typeObject();
