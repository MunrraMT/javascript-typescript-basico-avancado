const typeNullAndUndefined = (): void => {
  const createPerson = (
    firstName: string,
    lastName?: string,
  ): { firstName: string; lastName?: string } =>
    lastName ? { firstName, lastName } : { firstName };

  console.log(createPerson('André', 'Rodrigues'), createPerson('André'));

  const squareOf = (x: any) => {
    if (typeof x === 'number') return x * x;
    return null;
  };

  console.log(squareOf(10), squareOf('string'));

  const squareOfTwoNumber = (x: number) => x * x;
  const squareOfTwoString = (x: string) => String(Number(x) * Number(x));

  console.log(squareOfTwoNumber(10), squareOfTwoString('10'));
};

typeNullAndUndefined();
