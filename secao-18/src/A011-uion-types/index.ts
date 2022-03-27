const unionTypes = (): void => {
  const add = (a: number, b: number): number => a + b;

  // Quando ouver mais de um tipo, deve checar todas as possibílidade de entradas
  const addOrConcat = (
    a: number | string,
    b: number | string,
  ): number | string => {
    if (typeof a === 'number' && typeof b === 'number') return a + b;

    return `${a}${b}`;
  };

  console.log(add(10, 20));
  console.log(addOrConcat(10, 20));
  console.log(addOrConcat('10', 20));
  console.log(addOrConcat(10, '20'));
  console.log(addOrConcat('10', '20'));
};

unionTypes();
