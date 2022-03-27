/* eslint-disable no-unused-vars */

// Tipos básicos
const nome: string = 'André';
const idade: number = 30;
const adulto: boolean = true;
const simbolo: symbol = Symbol('Teste');

// Array
const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeStrings: Array<string> = ['1', '2', '3'];
const arrayDeStrings2: string[] = ['1', '2', '3'];

// Object
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'André',
  idade: 30,
  adulto,
};

// Function
function soma(x: number, y: number): number {
  return x + y;
}
const soma2 = (x: number, y: number): number => x + y;
const soma3: (x: number, y: number) => number = (x, y) => x + y;
