// Simple way of using console
console.log("hello World");

// Variables

var myName = "diego";
console.log(myName);

let students = ["diego", "juan"];
console.log(students);

const wuTang = ["rza", "method man", "Ole Dirty Bastard"];
console.log(wuTang);

// variable que cambia segun la declarion/valor que le damos en el 2nd variable
let hipHop;
hipHop = "wuTang Clan";

hipHop = "Outkast";

console.log(hipHop);

// Using prompt to ask something from the user through the browser

// let person = prompt("Which is the best hip hop group of the world?");

// Conditional Statemnts

// If else

// > --mayor que
// < --menor que
//   >= --mayor o igual que
//   <= --menor o igual que
//   == --si el valor es igual
//   === tiene que ser el mismo valor no puede haber ningun tipo de variacion.
// != -- lo que no sea / lo opuesto

// const age = parseInt(
//   prompt("Welcome to Ironhack cinema. How old are you?", "4")
// );
// if (age <= 16) {
//   console.log("You have a teenager discount.");
// } else if (age >= 65) {
//   console.log("You have a senior citizen discount :)");
// } else {
//   console.log("Sorry, you don't have any discount :(");
// }

// Nuestro ejercicio de Alcohol

// const drinkingAge = parseInt(
//   prompt("You wanna drink something tonight?, how old are you?")
// );
// if (drinkingAge >= 21) {
//   console.log("Yayyyyyy lets get our party on!");
// } else if (drinkingAge >= 70) {
//   console.log("Hey pilas porque la resaca de abuelos es verdadera");
// } else {
//   console.log("Go home you little kid!");
// }

// Facil verdad? Vamos a complicarnos la coss un poco

// Condicionales anidadas

// const number1 = parseInt(prompt("First number:"));
// const number2 = parseInt(prompt("Second number:"));
// if (number1 === number2) {
//   console.log("The numbers are equal.");
// } else {
//   if (number1 > number2) {
//     console.log("Number 1 is bigger than number 2.");
//   } else {
//     console.log("Number 1 is smaller than number 2.");
//   }
// }

// Ejemplo con muchas condiciones anidadas

// const name = prompt("Favorite Game of Thrones main character:");
// let house = "";
// if (name === "Khal Drogo") {
//   house = "Dothraki Horselord";
// } else if (name === "Daenerys") {
//   house = "Targaryen";
// } else if (name === "Jon Snow" || name === "Sansa" || name === "Arya") {
//   house = "Stark";
// } else if (name === "Cersei" || name === "Tyrion" || name === "Ser Jaime") {
//   house = "Lannister";
// } else {
//   house = "Wu Tang";
// }
// console.log(`Your favorite character is from the house ${house}.`);

// Switch Statements

// const name = prompt("Favorite Game of Thrones main character:");
// let house = "";
// switch (name) {
//   case "Khal Drogo":
//     house = "Dothraki Horselord";
//     break;
//   case "Daenerys":
//     house = "Targaryen";
//     break;
//   case "Jon Snow":
//   case "Sansa":
//   case "Arya":
//     house = "Stark";
//     break;
// }
// console.log(`Your favorite character is from the house ${house}.`);

// Wu Tang clan Excercise

// const wuTangMember = prompt(
//   "tell me your favorite member and I will tell you where is he/she from?"
// );
// let neighborhood = "";
// switch (wuTangMember) {
//   case "Rza":
//     neighborhood = "Staten Island, New York";
//     break;
//   case "Mami":
//   case "Old dirty Bastard":
//   case "U-god":
//   case "Rwaekon the chef":
//     neighborhood = "Brooklyn, New York";
//     break;
//   case "Inspecta deck":
//     neighborhood = "Miami, Fl";
//     break;
//   case "Diego Zito":
//     neighborhood = "Sunrise, Fl";
//     break;
// }
// console.log(`Your favorite Wu Tang Member is from ${neighborhood}`);

// Loops & Bucles

// WhileStatement
// let myNumber = 0;
// while (myNumber <= 10000) {
//   console.log(myNumber);
//   myNumber++; // this is the same as i = i + 1
// }

// Do - while Statements
// let myAge = 30;
// do {
//   console.log(myAge);
//   myAge--;
// } while (myAge >= 0);

// Simple use of a For Loop
// for (let anyNumber = 0; anyNumber <= 100; anyNumber++) {
//   console.log(anyNumber);
// }

// Nested Loop with break statement inside a function
// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`The number is: ${i}.`);
//   if (i === 3) {
//     break;
//   }
// }

// Nested loop with a continue statement inside a function

let anyNumber2 = 0;
while (anyNumber2 < 5) {
  anyNumber2++;
  if (anyNumber2 === 3) {
    continue;
  }
  console.log(`The number is: ${anyNumber2}.`);
}
