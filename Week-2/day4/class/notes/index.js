//Function Expressions
const rectangleArea = (width, height) => {
  return width * height;
};

//CallBack Functions
// Una función tipo callback es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
// Ejemplo:
// const nico = () => console.log("Hello");

const hello = (name) => alert(`Hello ${name}`); // 1era funcion
const tellMeYourName = (tellMeYour) => {
  let name = prompt("Tell me your name");
  tellMeYour(name);
}; // 2da funcion.

// function greeting(name) {
//   alert("Hello " + name);
// }

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

// console.log(tellMeYourName(hello));
//Añadimos un eventListener en el window para pasarle nuestros ejemplos :)
// window.addEventListener("load", () => {
//   const tellMeyourNameClick = document.getElementById("callbackbutton");
//   tellMeyourNameClick.addEventListener("click", tellMeYourName);
// });

const tellMeyourNameClick = document.getElementById("callbackbutton");
tellMeyourNameClick.addEventListener("click", processUserInput(greeting));
