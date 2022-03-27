/* eslint-disable no-plusplus */

const funcWithTypes = (): void => {
  type MapStringsCallback = (item: string) => string;

  const mapStrings = (
    arr: string[],
    callbackFN: MapStringsCallback,
  ): string[] => arr.map(callbackFN);

  const abc = ['a', 'b', 'c'];
  const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

  console.log('teste');
  console.log(abc);
  console.log(abcMapped);
};

funcWithTypes();
