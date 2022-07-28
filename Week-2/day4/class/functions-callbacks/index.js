//Hemo aprendido la manera convencional de usar funciones
function calcSum(x, y) {
  return x + y;
}
// console.log(calcSum(2, 4));

// function declaration (statement)

const welcomeMessage = (message) => {
  return message;
};

const greeting = welcomeMessage("So nice to have you here! Welcome!");
// console.log(greeting);

// function declaration (statement) - SIMPLIFIED
const welcomeMessageSimplified = function (message) {
  console.log(message);
};
// welcomeMessageSimplified("C.RE.A.M - Cash Rules Everything Around Me -  👐");

// function declaration (statement)

// checkFuncDeclaration(); // => Func declaration CAN be invoked before it's defined.
// checkFuncDeclaration();

function checkFuncDeclaration() {
  console.log("Func declaration CAN be invoked before it is defined.");
}

// function expression

// checkFuncExpression(); // => ReferenceError: checkFuncExpression is not defined

// const checkFuncExpression = function () {
//   console.log("Func expression CAN NOT be invoked before it is defined.");
// };
// ESTA FUNCION DA ERROR

// anonymous function as other function arguments - example 1
function printName(name, anonFunc) {
  anonFunc(name);
}

// printName("sandra", function (name) {
//   console.log(name[0].toUpperCase() + name.slice(1));
// });

// anonymous function as other function arguments - example 2
function getLength(str, anonFunc) {
  anonFunc(str);
}

// getLength("pauman", function (str) {
//   console.log(`${str} has ${str.length} letters.`);
// });

// getLength("noemi", function (str) {
//   console.log(`${str} has ${str.length} letters.`);
// });

// anonymous function as other function arguments - example 3 - SETTIMEOUT
// SETTIMEOUT: El método setTimeout() de JavaScript es un método incorporado que permite temporizar la ejecución de una determinada función . Es necesario pasar la cantidad de tiempo a esperar en milisegundos , lo que significa que para esperar un segundo, es necesario pasar mil milisegundos .

// setTimeout(function () {
//   console.log(
//     "Quincy Jones, Sir George Martin & Phil Spector are by far the sickest producers of the 20th Century"
//   );
// }, 3000);
// Nada pasa por tres segundos!

// Dado que las funciones anónimas no están disponibles para su uso posterior, si, por alguna razón, tenemos la necesidad de utilizarlas, debemos darles una declaración de función adecuada o una estructura de expresión de función. Así podremos referenciarlas y utilizarlas siempre que lo necesitemos.
const notifyUser = () => {
  console.log(
    "Neil Frances, 40Nights&40Days, LargeProffesor, Dj Premier, Kevin Parker, Mark Ronson and believe or not, freaking Dave Ghrol are the producers with more grammy nominations within the last 20 years in the 'Producers Category' of music "
  );
};

// setTimeout(notifyUser, 4000);

//Arrow Functions
// arrow function syntax

// function expression syntax

// const greetingWithoutArrow = function (name) {
//   console.log(`Hello, ${name}!`);
// };
// console.log(greetingWithoutArrow("Diego"));

const greetingWithArrow = (name) => {
  return name;
};
// console.log(`Hello ${greetingWithArrow("Aleix")}`);

//Pero esta función se puede acortar aún más, ya que sólo devolvemos una expresión (sólo hay una línea de código en el cuerpo), por lo que podemos omitir los corchetes y omitir el retorno/RETURN, ya que está implícito:
const greetingWithArrowShorter = (name) => `Hello, ${name}!`;
// console.log(greetingWithArrowShorter("Jarko"));

//En caso de que no se pasen parámetros - entonces los paréntesis vacíos son obligatorios:
// const greetingWithoutParameters = () =>
//   console.log("Hello there you Javascript Lovers!");
// console.log(greetingWithoutParameters());

//USING THE KEYWORD THIS
const user = {
  name: "Diego",
  age: 31,
  music: "Rock",
  education: "High School",
  location: "Barcelona, Spain",
  yourOwnKey: function () {
    console.log(this);
  },
};
// console.log(user.yourOwnKey());
//Como podemos ver, la palabra clave this se refiere al propio objeto (usuario). Así que si quisiéramos añadir un año a la edad de Diego, podríamos actualizar nuestro código de la siguiente manera:
const user2 = {
  name: "Diego",
  age: 31,
  getOlder: function () {
    this.age += 1;
  },
};
// console.log(user2.getOlder());

//Genial. Ahora, vamos a añadir el método nativo de JS setInterval() para hacer que Diego sea "más viejo" en un año cada segundo:
const user3 = {
  name: "Diego",
  age: 31,
  getOlder: function () {
    setInterval(function () {
      this.age += 1;
      console.log(this.age);
    }, 3000);
  },
};
// console.log(user3.getOlder());

//Hmm... ¿qué ha cambiado? Volvamos a sacar la palabra clave this:
const user4 = {
  name: "Diego",
  age: 31,
  getOlder: function () {
    setInterval(function () {
      console.log(this);
    }, 1000);
  },
};
// console.log(user4.getOlder());
// Parece que hemos "perdido" el acceso a las propiedades del objeto "usuario", ya que esta palabra clave se refiere ahora al método setInterval(). Simplificando, esto dentro de setInterval() se refiere al setInterval().

//Entonces, ¿qué podemos hacer para acceder a las propiedades que necesitamos?

//La forma más sencilla es utilizar la sintaxis de la función flecha, ya que vincula el ámbito al propio objeto. (Más adelante explicaremos el término "bind" con más detalle. En otras palabras, gracias a =>, ahora tenemos de nuevo acceso a las propiedades del "usuario").
const user5 = {
  name: "Diego",
  age: 31,
  getOlder: function () {
    setInterval(() => {
      this.age += 1;
      console.log(this.age);
    }, 1000);
  },
};
// console.log(user5.getOlder());

//USANDO ARGUMENTS
// function printSomething() {
//   console.log(arguments);
// }

// Es un juego sintactico
// Arrow Function - 1 Sola Linea
const nico = () => console.log("Hello");
// Debido a que dentro del body no tenemos ninguna sequencia de logica corriendo, solo estamos invocando a un solo output, podemos sacar tanto los parentesis como los corchetes

// console.log(
//   printSomething(
//     "What else can a guitarrist do but, just learn from Hendrix, Howlin Wolf & John Frusciante"
//   )
// );

//Podemos utilizar corchetes [] para acceder a los argumentos: arguments[0] devuelve el primer argumento, arguments[1] devuelve el segundo, y así sucesivamente. También podemos utilizar la propiedad length del objeto arguments para determinar el número de argumentos.

// function printSomething2() {
//   console.log(`arguments length:  ${arguments.length}`);
//   //apuntando a los valores del objectLike array usando el syntax Object.values(arguments)
//   console.log(
//     `Total value of arguments through object.values: ${Object.values(
//       arguments
//     )}`
//   );
//   // apuntando a los valores del objectLike con el syntax normal sin el template literal
//   console.log("Total Arguments: ", arguments);
//   console.log(`second arg:  ${arguments[1]}`);
//   console.log(
//     `Hola Mi nombre es Diego Zito, tengo tantos años, me gusta el rockand roll, estudie high school y vivo en barcelona españa.`
//   );
// }
// printSomething2(
//   "Hello",
//   "I love playing records",
//   "Cesc necesita un birra fria!"
// );

//Como usamos estos argumentos?
// function printArgs() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// console.log(printArgs("hey", "there", "ironhacker"));
// console.log(printArgs(1, 77, { name: "Diego" }, ["Guitar", "Piano"]));

//Tengan en cuenta que los argumentos son un objeto, por lo que .forEach() y otros métodos específicos de los arrays no se pueden utilizar en él. Si intentas utilizar métodos de array sobre él, obtendrás un error similar a este:
//TypeError: arguments.forEach is not a function

//Sin embargo, debes tratarlo como un array cuando lo utilices en tu código. Aunque tiene algunas limitaciones, este "objeto tipo array" puede convertirse fácilmente en un array, si es necesario:
// const args = Array.from(arguments);

// EJEMPLO
function useArgsAsArr() {
  const argsArr = Array.from(arguments);

  argsArr.forEach((el) => console.log(el));
}

// console.log(useArgsAsArr("I", "am", "iterated", "with", "forEach"));

// Iteration #1

// const myObject = {
//   name: "Diego Zito",
//   age: 31,
//   genre: "Hip Hop",
//   education: "MBS - International Business & Administration",
//   location: "Barcelona, Spain",
//   mySuperCoolKey: function () {
//     console.log(
//       `Hello my name is ${this.name}, my age is ${this.age}, I like the musical genre ${this.genre} I have studied ${this.education} and I live in ${this.location}`
//     );
//   },
// };

// myObject.mySuperCoolKey();

// Iteration #2
// mySuperCoolArgumentStory(
//   "Diego Zito",
//   31,
//   "Hip Hop",
//   "MBS - International Business & Administration",
//   "Barcelona, Spain"
// );

// function mySuperCoolArgumentStory() {
//   console.log(
//     `Hello my name is ${arguments[0]}, my age is ${arguments[1]}, I like the musical genre ${arguments[2]} I have studied ${arguments[3]} and I live in ${arguments[4]}`
//   );
// }

//CallBack Functions
// Una función tipo callback es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
// Ejemplo:
// const nico = () => console.log("Hello");

const hello = (name) => alert(`Hello ${name}`); // 1era funcion
const tellMeYourName = (tellMeYour) => {
  let name = prompt("Tell me your name");
  tellMeYour(name);
}; // 2da funcion.

window.addEventListener("load", () => {
  const tellMeyourNameClick = document.getElementById("callbackbutton");
  tellMeyourNameClick.addEventListener("click", tellMeYourName);
});
//Map's View of Nico
// Por cada pocision del array ejecuta una funcion que se le pasa por parametro, en cada iteracion, la funcion devuelve un resultado.

//Filter
// Hace exactemente lo mismo que el map pero devuelve true.false por que es una manera de iterar condicionalmente.

//Reduce
// MDN simple explanation
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

// console.log(sumWithInitial);
// // expected output: 10

// const posts = [
//   { id: 1, category: "frontend", title: "All About That Sass" },
//   { id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips" },
//   {
//     id: 3,
//     category: "frontend",
//     title: "Sanitizing HTML: Going antibactirial on XSS attacks",
//   },
// ];

// const categoryPosts = posts.reduce((acc, post) => {
//   let { id, category } = post;
//   return { ...acc, [category]: [id] };
// }, {});
// console.log(categoryPosts);

// const finalNico = categoryPosts;

// finalNico
// const res1 = { frontend: [1] };

// const res2 = { frontend: [1], backend: [2] };

// const finalRes = { frontend: [3], backend: [2] };
