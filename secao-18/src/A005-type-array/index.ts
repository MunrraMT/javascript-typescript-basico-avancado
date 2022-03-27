const typeArray = (): void => {
  const multiplicaArgs = (...args: Array<number>): number =>
    args.reduce((acc, value) => acc * value);

  const concatenaStrings = (...args: string[]): string =>
    args.reduce((acc, value) => acc + value);

  const toUpperCaseArray = (...args: string[]): string[] =>
    args.map((item) => item.toLocaleUpperCase());

  console.log(multiplicaArgs(10, 20, 30));
  console.log(concatenaStrings('10', '20', '30'));
  console.log(toUpperCaseArray('a', 'b', 'c'));
};

typeArray();
