const typeTuple = (): void => {
  // Um Array com tamanho e tipos fixos
  const dadosCliente1: [number, string] = [1, 'André'];
  dadosCliente1.shift();

  const dadosCliente2: [number, string] = [1, 'André'];
  dadosCliente2[0] = 100;
  dadosCliente2[1] = 'Camila';

  const dadosCliente3: [number, string, string] = [1, 'André', 'Rodrigues'];
  const dadosCliente4: [number, string, string?] = [1, 'André'];
  const dadosCliente5: [number, string, ...string[]] = [
    1,
    'André',
    'Rodrigues',
    'Melgaço',
    'dos',
    'Santos',
  ];

  console.log(
    dadosCliente1,
    dadosCliente2,
    dadosCliente3,
    dadosCliente4,
    dadosCliente5,
  );
};

const typeReadOnlyArray = (): void => {
  const array1: readonly string[] = ['teste', 'array'];
  const array2: ReadonlyArray<string> = ['teste', 'array'];

  console.log(array1, array2);
};

typeTuple();
typeReadOnlyArray();
