// Array Methods

// que es un Array ?

// Es una coleccion de elementos o cosass. Los arrays es guardar data y nosotros usamos esa data para nuestro beneficio, sea pintar, editar o manipular dicha data.

const myProperty = [100, true, "WuTang", {}];

// La posicion de un elemento dentro del array se le conoce como "INDEX".

// Empezamos a contar el index de los array en su posicion inicial que seria el 0.

// ES6 - VERSION MODERNA
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
// console.log(salad);

// ES5 - VERSION MODERNA
const salad2 = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");
// console.log(salad2);

// Como seleccionar algun elemento especifico del array ?
// console.log(salad[2]);

// Como verificar la longitud del array? - usamos el methodo "Length"
// console.log(salad.length);

// Matematicamente consiguiendo el valor de un elemento usando "length"
const len = salad.length;
// console.log(salad[len - 3]);

// For Loop para iterar encima de  nuestar ensalada!
// for (let saladIndex = 0; saladIndex < salad.length; saladIndex++) {
//   console.log(`Los Elementos en la posicion ${saladIndex} is ${salad[3]}`);
// }

// Como añadir elementos al array - pushMethod()
// pushMethod Def: inserta un elemento dentro del Array, lo inserta siempre al final del array.
salad.push("🍪");
// console.log(salad);

// Como añadir elementos al array - unShiftMethod()
// unShiftMethod def: iserta un elemento al principio del array.
salad.unshift("🍋");
// console.log(salad);

// Como quitar cosas de nuestro array ? - popMethod()
// popMethod def: Apuntamos al final del array, o ultimo elemento del array y elimminamos dicho elemento.
salad.pop();
// console.log(salad);

// Como quitar cosas de nuestro array ? - shiftMethod()
// shiftMethod def: apuntamos al principio y eleminamos el primer elemento del array.
salad.shift();
// console.log(salad);

// Como copiar elementos de un array ? - sliceMethod()
//sliceMethod def: nos permite copiar los elementos del array original, pero nos crea una copia del array original.
const saladCopy = salad.slice();
// console.log(`El valor de SaladCopy es = ${saladCopy}`);

// DESTRUCTURACION DE ELEMENTOS VIA JS

// Approach usando la destructuracion - NUEVA ESCUELA ECMA6
let [tomato, mushroom, broccoli] = ["🍅", "🍄", "🥦"];
// console.log(tomato, mushroom, broccoli);

// Approach sin usar destructuracion - VIEJA ESCUELA ECMA5
let vegetables = ["🍅", "🍄", "🥕"];
let tomato2 = vegetables[0];
// console.log(tomato2);

// Usando destructuracion - vamos a asignar algun valor a una variable
let [tomato3, mushroom3 = "🍄"] = ["🍅"];
// console.log(tomato3);
// console.log(mushroom3);

// Usando destructuracion vamos a omitir un valor dentro de nuestro array
let [tomato4, , mushroom4] = ["🍅", "🥕", "🍄"];
// console.log(tomato4);
// console.log(mushroom4);

// ARRAYS ANIDADOS ?? NESTED-ARRAYS
// En js podemos tener arrays anidados, esto significa que podemos tener n array dentro de un array, este tipo de anidacion es infinita.
let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];

// La manera Larga, declaramos una variable apuntando al array y despues descturamos.
const veg = fruits[4];
// console.log(veg);

const carrot = veg[2];
// console.log(`Using the long way ${carrot}`);

// La manera corta - usando los brackets para desctruturar
// console.log(`Using the short way ${fruits[4][2]}`);

// USING SPREAD OPERATOR
// spreadOperator def: El operador spread(...) nos deja crear una copia de nuestro array o objeto rapidamente

const westCoastRappers = ["SnopDogg", "J Cole", "Kendrick Lamar"];

// copiando usando el spreadOperator
const myFavoriteRappers = [...westCoastRappers];
// console.log(`EL valor de myFavoriteRappers es ${myFavoriteRappers}`);

//Usando el spread con variables dentro de objetos
const myFavoriteMusic = {
  rock: "Soda Stereo",
  classical: "Stravinsky",
  hipHop: "A tribe called quest",
};
const myCopyOfFavoriteMusic = { ...myFavoriteMusic };
// console.log(myCopyOfFavoriteMusic);

// USING THE REST OPERATOR
// restOperator def: El rest operator nos deja hacer lo opuesto del spread, basicamente el rest operator nos deja agrupar elementos dentro del Array.
const hipHop = ["outkast", "Dr. Dre", "The Game", "De La Soul", "Nas"];
const [group1, group2, ...rest] = hipHop;
// console.log(group2, ...rest);

// Intercambiando valores usando destructuracion

let westCoastHipHop = "Tupac Shakur";
let eastCoastHipHop = "Notorious B.I.G";
[westCoastHipHop, eastCoastHipHop] = [eastCoastHipHop, westCoastHipHop];
// console.log(westCoastHipHop);
// console.log(eastCoastHipHop);

// Como agrupar arrays usando el spread operator ?
// Podemos agrupar arrays y crear nuevos arrays con los elementos de los arrays que originalmente accedemos.

const faceEmojis = ["🙂", "😔"];
const veggieEmojis = ["🥦", "🥒", "🌽", "🥕"];

const faceWithVeggies = [...faceEmojis, ...veggieEmojis];
// console.log(faceWithVeggies);

// Podemos agrupar objetos y crear nuevos objetos con los elementos dentro del mismo siempre y cuando no se compartan los keys "llaves" dentro de los objetos. que originalmente accedemos.

const diegosTopThree = {
  rock: "Soda Stereo",
  classical: "Stravinsky",
  hipHop: "A tribe called quest",
};

const diegosBottomThree = {
  rock: "Soda",
  classical2: "Strav",
  hipHop2: "A tr",
};

const diegosSix = { ...diegosTopThree, ...diegosBottomThree };
// console.log(diegosSix);

// RECAPITULACION

// push() - inyecta elemento al final del Array
// unshift() - inyecta elemento al principio del Array
// pop() - quita elemento al final del array
// shift() -  quita elemento al principio del array
// slice() - Crea una copia del array
// length - te dice la longitud del array

// Destructuracion
// (...) spread operator - copias de arrays
// (...rest) rest operator - agrupa elementos

// concatMethod() - Unificamos arrays dentro de uno. Esto es un metodo inmutable, como ya sabemos creamos una nueva copia.
const first = [1, 2, 3];
const second = [4, 5, 6];

const merged = second.concat(first);
// console.log(merged);
// console.log(first);

// joinMethod() - Unifica todos los elementos de un array usando un separador y te regresa un string!. El seprador que se representa es el (,).

const emotions = ["🙂", "😍", "🙄", "😟"];
const joined = emotions.join("<=>");

// console.log(typeof joined);
// console.log(joined);
// console.log(emotions);

// filMethod() - cambia el valor de un array con valor que tu le asignes, podemos cambiar todos los elementos de un array o podemos cambiar  elementos individualmente.

const colors = ["purple", "blue", "orange"];

// 190(añadimos un color en la posicion, 3 usando un push())
// 191(cambiamos el valor del color de la posicion 3 con nuestro nuevo valor apuntando la posicion correcta.)
colors.push("yellow");
colors.fill("black", 3);

// Approach tradicional
colors.fill("yellow", 2);
// console.log(colors);

// Para cambiar todos los elementos del array usa el fill sin asignar una posicion
// colors.fill("yellow");
// console.log(c

// includesMethod() - nos da la capacidad de verificar si existe un elemento dentro del Array. Booleanicamente, si el elemento existe nos retorna "true", lo oppuesto nos da "false"

const names = ["Zarko", "Diego", "Monica", "Aleix"];

// console.log(names.includes("Jarko"));

//indexOfMethod  - nos da la posicion de un elemento dentro de un array. si usamos este metodo, y al verificar no consigue el elemento, nos va a regresar -1 en consola.

// Valor negativo - -1
// console.log(names.indexOf("Balma"));

// Valor Positivo
// console.log(names.indexOf("Balma"));

//reverseMethod() - te invierte la posicion de los elementos de un array!
// console.log(names.reverse());

//sortMethod() - este metodo convierte los elementos de un array en strings y despues los organiza defacto de un manera ascendiente.
const myFavoriteNumbers = [23, 5, 100, 56, 9, 13, 37, 10, 1];

// console.log(myFavoriteNumbers.sort());

function ascending(a, b) {
  return a - b;
}
// console.log(myFavoriteNumbers.sort(ascending));

// spliceMethod() - añadir, actualizar, y quitar elementos de un array.

// primer param - donde empiezas
// segundo param - cuantos eliminas
// tercer param - Numero de elementos que quieres añadir al array

// Añadir elementos usando splice()
const barcelonaBars = ["3345", "La absenta del raval", "Antic Teatre"];
barcelonaBars.splice(2, 0, "Betty Ford", "El Nevermind");
// console.log(barcelonaBars);

// Eliminar elementos usando splice()
const barcelonaBars2 = [
  "3345",
  "La absenta del raval",
  "Antic Teatre",
  "Betty Ford",
  "El Nevermind",
];
barcelonaBars2.splice(1, 4, "Kadushis");
// console.log(barcelonaBars2);

let students = [
  {
    id: 001,
    f_name: "Alex",
    l_name: "B",
    gender: "M",
    married: false,
    age: 22,
    paid: 250,
    courses: ["JavaScript", "React"],
  },
  {
    id: 002,
    f_name: "Ibrahim",
    l_name: "M",
    gender: "M",
    married: true,
    age: 32,
    paid: 150,
    courses: ["JavaScript", "PWA"],
  },
  {
    id: 003,
    f_name: "Rubi",
    l_name: "S",
    gender: "F",
    married: false,
    age: 27,
    paid: 350,
    courses: ["Blogging", "React", "UX"],
  },
  {
    id: 004,
    f_name: "Zack",
    l_name: "F",
    gender: "M",
    married: true,
    age: 36,
    paid: 250,
    courses: ["Git", "React", "Branding"],
  },
];

// filterMethod() - este metodo nos crea un nuevo array con todos los elementos que basicamente condicionemos a que corran dentro de una function.

const femaleStudents = students.filter((element, index) => {
  return element.gender === "F";
});
// console.log(femaleStudents);

//mapMethod() - este metodo nos crea un nuevo array mientras va iterando en base a algunos elementos que nosotros le pasaremos dentro del metodo.

const fullNames = students.map((element, index) => {
  return `Fullname of student is ${element.f_name} ${element.l_name}`;
});
// console.log(fullNames);

//reduceMEthod() - De un conjunto de valores, te devuelve un valor definido por el progamador, en este caso parametrizamos el valor del total de dinero pagado por los estudiantes del array de objectos llamado "students"

const total = students.reduce((totalPaid, student) => {
  totalPaid = totalPaid + student.paid;
  return totalPaid;
}, 0);
// console.log(total);

// someMethod() - este metodo nos regresa un valor booleano en base a verificar algun elemento del elemento corriendo en una condicion dentro de funcion.

const isStudentBelow30 = students.some((studentAge) => {
  return studentAge.age < 30;
});
// console.log(isStudentBelow30);

// findMethod() - este metodo nos deja encontrar el primer elemento dentro del array mientras iteras en base a los valores del array.

const youngStudents = students.find((youngStudent, index) => {
  return youngStudent.age < 30;
});
console.log(youngStudents);
