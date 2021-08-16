const typeUnknwon = (): void => {
  let x: unknown;

  x = 100;
  x = 'André';
  x = 10;

  // unknown é um tipo "any" que precisa ser checado para ser usado
  if (typeof x === 'number') console.log(x + 100);
};

typeUnknwon();
