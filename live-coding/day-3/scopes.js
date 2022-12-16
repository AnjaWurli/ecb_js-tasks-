//const a = 1;

// if (a === 0)
//     console.log("ja");
//     console.log("xxx");

// Tenary Expression
// let a = -1;
// a = a < 0 ? Math.abs(a) : a;

// Scopes

// Global Scope
// const a = "Globales a";

// function test() {
//   // Zugriff auf globale Variable möglich
//   console.log(a);
// }
// test();

// Function Scope
// function test2() {
//   // Shadowed Variable Name
//   const a = "Lokale Variable in Funktion test2";
//   console.log(a); // Zugriff auf a in der Funktion
// }
// test2();

// function test3() {
//   // Variablen die innerhalb von Funktionen deklariert werden
//   // sind nur da sichtbar
//   const b = 0;
// }

// console.log(b);

// function test4() {
//   // Function Scope
//   const a = "a in function";
//   if (true) {
//     // Block Scope innerhalb von if
//     const b = "a in if";
//     console.log(a); // Zugriff auf a in function scope
//     console.log(b); // Zugriff auf b in block scope von if
//   }
//   console.log(a); // Zugriff auf a in function scope
// }

// test4();

// function sayHello() {
//   console.log("Hallo");
// }
