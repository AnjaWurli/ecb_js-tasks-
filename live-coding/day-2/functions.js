// const tax = 19;

// const netPrice = 25;
// const grossPrice = (netPrice * (100 + tax)) / 100;

// const netPrice2 = 40;
// const y = 100;
// const grossPrice2 = (netPrice2 * (100 + 19)) / y;

// Deklaration der Funktion sayHello
// const x = 1;

// function sayHello() {
//   // Code block = function block
//   console.log("Hello");
// }

// sayHello();
// console.log("Tschüß");
// sayHello();

// log ist eine Funktion
// console.log("asfdasdfasdf");
// // Error ist eine Funktion
// console.error("FEHLER!!!");

// Funktionen mit Parametern

// function sayHello(name) {
//   console.log("Hallo " + name);
// }

// // string mit Wert "Tim" ist das Argument
// // für den Funktionsaufruf
// sayHello("Tim");

// // string mit Wert "Lars" ist das Argument
// // für den Funktionsaufruf
// sayHello("Lars");

// // Aufruf ohne Argument
// sayHello();

// function addTwoNumbers(a, b) {
//   console.log(a + b);
// }

// addTwoNumbers("3", "5");

// function multiplyTwoNumbers(a, b) {
//   // Überprüfung des Typs einer variable/parameter
//   //   if(typeof a === 'number' && typeof b === 'number') {
//   //       console.log(a * b);
//   //   }

//   console.log(a * b);
//   debugger;
// }

// multiplyTwoNumbers("3", "5");
// // logausgabe vom wert 8 auf der konsole

// function addThreeOrFourNumbers(a, b, c, d) {
//   if (d !== undefined) {
//     console.log(a + b + c + d);
//   } else {
//     console.log(a + b + c);
//   }
// }
// addThreeOrFourNumbers(1, 3, 5, 4);
// addThreeOrFourNumbers(1, 3, 5);

function addTwoNumbers(a, b) {
  const c = a + b;
  return c;

  //  return a + b;
}

const sum = addTwoNumbers(1, 2);
console.log(sum);

// const sum2 = addTwoNumbers(3, 4);
// console.log(sum2);
