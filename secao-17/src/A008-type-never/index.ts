const typeNever = (): void => {
  const createError = (): never => {
    throw new Error('Erro qualquer');
  };

  createError();
};

typeNever();
