let umaString = 'Um texto';

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log('------');

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Um', 3));

console.log('------');

console.log(umaString.lastIndexOf('t'));
console.log(umaString.lastIndexOf('t', 3));

console.log('------');

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/gi));
console.log(umaString.replace('Um', 'Outro'));
umaString = 'O rato roeu a roupa do rei de Roma.';
console.log(umaString.replace(/r/g, 'l'));

console.log('------');

console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3));
console.log(umaString.slice(-5));
console.log(umaString.slice(-5, umaString.length - 1));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

console.log('------');

console.log(umaString.split(' '));
console.log(umaString.split(' ', 3));

console.log('------');

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
