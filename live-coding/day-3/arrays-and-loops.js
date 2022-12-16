// Array

// Array wird über eckige Klammern erzeugt
// Array ist eine Liste mit beliebig vielen Eintragen
// const arr = [];
// const arr1 = ["a"];
// const arr2 = ["a", "b", "c"];

// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// const arr = ["Tim", "Lars", "Jens", "Anja"];
// console.log(arr);
// console.log(arr.length); // anzahl einträge im array
// console.log(arr[1]); // index zugriff

// const arr = [1, false, undefined, "Tim", 1.111, null, [1, 2, 3]];
//console.log(arr.length);

// Index beginnt bei 0 - Zero Based Index

// const arr2 = arr[6];
// console.log(arr2.length);
// console.log(arr2[1]);

// console.log(arr[6][1]);

// Loops - for, while, do-while

// for schleife: führe einen bestimmten codeblock n mal aus

// for(initialisierung; condition; afterthought)
// i = iterator
// for (let i = 0; i < 5; i = i + 1) {
//   console.log("Hallo");
//   console.log("Tschüß");
// }

// //               0       1      2        3       4      5
// const names = ["Anja", "Tim", "Jens", "Tino", "Lars", "Nico"];

// for (let i = 0; i < names.length /* 6 */; i = i + 1) {
//   console.log("i: " + i);
//   const name = names[i];
//   console.log("Hallo " + name);
//   //console.log("Hallo " + names[i]);
//   //   console.log("Hallo");
//   //   console.log("Tschüß");
// }

// const sheeps = [true, false, true, false, true];
// let countSheep = 0;

// for (let i = 0; i < sheeps.length; i++) {
//   if (sheeps[i] === true) {
//     countSheep = countSheep + 1;
//   }
// }

// console.log(countSheep);

// infinite loop
// for(let i = 0; i < 1; i = 0) {
//     console.log("This is jackass")
// }

const word = "Anja";
console.log(word.length);
console.log(word[1]);
