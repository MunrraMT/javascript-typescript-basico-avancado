let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log(varA, varB, varC);

let varA2 = varA;

varA = varB;
varB = varC;
varC = varA2;

console.log(varA, varB, varC);

varA = 'A'; //B
varB = 'B'; //C
varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
