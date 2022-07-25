// // Variable Scopes

// Para trabajar con JS eficientemente, tenemos que entender el concepto de scope/alcanze.

// La variable de de alcanze esta controlada por la declaracion de la variable.

// 3 tipos de scopes

// globalLevelScope: se accede de donde sea el script se ha creadoo.Normalmente se inician estas variables arriba al principio del archivoo.

// functionLevelScope: se limita a una variable accionada dentro de una funcioon.No se puede referenciar fuera de dicha funcion ya que depende que la funcion corra para que se active la variable.

// blockLevelScope: anywhere between the curly tags { }.

// Ejemplo 1
// const message = "Hello from the global scope!";

// function sayHelloFromLocalScope() {
//   const greeting = "Hello from functional/local scope!";
//   return greeting;
// }

// console.log(message);
// console.log(sayHelloFromLocalScope());
// console.log(sayHelloFromLocalScope);

// Ejemplo 2
// let outerVar = 1;

// function inner() {
//   let innerVar = 2;
//   return innerVar;
// }

// console.log(inner());
// => ReferenceError: innerVar is not defined

// Ejemplo 3
// for (var i = 1; i > 31; i++) {
//   console.log(`Iteration number: ${i}`);
// }
// console.log(`After the loop: ${i}`);

// Ejemplo 4 - VAR SHOWCASE
console.log(message);
var message = "Hello from the global scope!";

// console.log(idea);
// var idea = "I love chocolate"; - global scope
// let idea = "I love chocolate"; - notGlobal scope

// Shadowing
// let a = 1;
// let b = 2;

// function inner() {
//   a = 4;
//   let b = 3;
// }

// inner();
// console.log(a);
// console.log(b);
