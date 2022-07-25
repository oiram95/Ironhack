// Data types in JS

// Tenemos 2 tipos de datos en este tipo de lenguaje

// Tenemos Datos primitivos y no primitivos. En pocas palabras los datos primitivos representan un valor y los datos no primitivos los podemos entender como composiciones de datos primitivos, que vendrian siendo lo que en JS llamamos "OBJETOS"

// Segun MDN los datos primitivos son tipos de datos que no esta compuesto por un objecto y no tenga algun metodo.

// En JS tenemos estos 6 tipos de datos primitivos:

//     - numeros
//     - strings
//     - Booleanos
//     - null
//     - undefined
//     - symbolos(añadidos en el 2015 con la actualizacion del ECMA)

//  Aunque ustedes no sepan que significa inmutable, tengo que hacer un emfasis en esta palabra en relacion a estos tiposDeDatos que tenemos en JS.Ya que al ser inmutables, no pueden ser alterados.

// Numeros como dataTypes

// const age = 31 - se representan "integers"
// const price = 12.99 - se representan "floating points"

// Tenemos otra asignacion de dataTypes con los numeros que se llama = NaN - "Not a Number"

// Veamos como es esto :)

const name = "wuTang";
const whosThis = name / 2;
console.log(whosThis);

// COMO VA A FUNCIONAR ESTO SI ESTO ? IMPOSIBLE

// NUMBER EXPRESSIONS

// Operadores matematicos :) - back 2 basics en el colegio :)

// + addition
// - subtraction
// * multiplication
// / division
// ** exponencial - avanzado

console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);
console.log(2 ** 5);

//  % Modulo o en ingles remainder - avanzado
// 4 / 2 = 2
console.log(4 / 2);
//With a remainder of 0
console.log(4 % 2);

// If a number modulus other number is equal to 0
// it is a multiple of "other number"

// 8 is indeed a multiple of 2!
console.log(8 % 2 === 0);
// 9 is NOT a multiple of 2!
console.log(9 % 2 === 0);

// ASSIGNMENT OPERATORS

// Ya sabemos que usamos el = para asignarle un valor a una variable no ?
// Ejemplo

const diego = "Wu Tang Connoisseur";
console.log(diego);

// Un operador de asignacion muy comun vendria siendo el +=

let diegosAge = 31;
diegosAge += 1;
console.log(diegosAge);

// Importante recordar que lo que esta haciendo esta operacion es agregarle 1 al valor de diegosAge, pero no cambia el valor original de la variable diegosAge.Lo que hace aca es una computacion de los 2 numeros y te regresa un valor computado.Importante que volvamos a mencionar un poco esto de la inmutabilidad ya que veremos porque este principio es importante.

// Veamos la imagen juntos de estas asignaciones:)

// EXPRESIONES

// Las expresiones son combinaciones de valores(numeros, strings, arrays, objetos) conjunto a un set de operaciones que resultan en otra variable:)

const result = (7 + 5) / 3 - 8;
console.log(result);

// Apliquemos el approach PEMDAS a esta operacion.
//     parentesis
//     exponentes
//     multiplicacion
//     division
//     adicion
//     substraccion

const i = 10 + (5 * 2 ** 3) / 4 - 6;
console.log(i);
console.log(`i es igual a ${i}`);

// STRINGS

// Podemos escribir strings en algunos de los quotes o comillas:

dobles ""
singulares ''
backticks ?? ``

// Las comillas dobles y singulares en teoria no tienen ninguna diferencia, es mas que todo por dare opciones a los programadores, pero los backticks sin toca estar pendientes de usarlas porque tienen extra funcionabilidad.

// Las backticks se usan como han visto en mi linea 100, para crear lo que se llama un templateLiteral.

// templateLiterals sin mas ni menoss, nos dejan embediar expressiones dentro de nuestro codigo.

let singer = "Stevie Nicks";
console.log(`The singer from the song dreams is called ${singer}`);

console.log(`${singer} sings about ${2 ** 4} shows per year.`);

// ES5 OLD - SCHOOL STYLE - BORING

var bandMember = { firstName: "Jim", lastName: "Morrison" };
var message =
  "Hello " + bandMember.firstName + " " + bandMember.lastName + "!!";
console.log(message);

// ES6 NEW - WAY OF DOING

let bandMember2 = { firstName: "Robie", lastName: "Krieger" };
let message2 = `Hello ${bandMember2.firstName} ${bandMember2.lastName}!!`;
console.log(message2);

// Los backticks nos dan la capacidad de lanzarnos cosas mas cool como strings de multilineas:)

const rockArgentino = `
1. Seru giran
2. Sui Generis 
3. Fito Paez 
4. Pappos Blues
5. Soda Stereo
6. Charly Garcia
7. Luis Ablerto Spinneta
8. Patricio Rey, y los reconditos de ricotta
9. Billy B ond y la pesada del rock 
`;
console.log(rockArgentino);

// Characteres especiales = "ESCAPE SEQUENCES"

// Some strings are special because they contain special characters. This means that we have to use escape sequences to make everything work.

// For example, when you want to have double quotes in the middle of your string (sentence), you will have to use some “magic” .

// const myFavoriteBook = "Mi libro preferido es "Meditations - Marcus Aurelius".";
// console.log(myFavoriteBook)

// const myFavoriteBook2 = "Mi libro preferido es 'Meditations - Marcus Aurelius'";
// console.log(myFavoriteBook2);

const myFavoriteBook3 =
  'Mi libro preferido es "Meditations - Marcus Aurelius".';
console.log(myFavoriteBook3);
console.log(myFavoriteBook3.length);

// STRING MANIPULATION

// Manipulating and modifying strings in code are common operations. Simple things such as capitalizing a name, or checking to see if a word starts with a particular letter are very common.

// JavaScript includes a string library of methods to simplify some of the most common tasks on strings. Let’s look at how to perform some of these operations.

// Añadir a un string
// Podemos añadir o concatenar strings con el operadors + o el operador +=

let miBarriga = "";
miBarriga += "Quiero comerme un bocata!";
console.log(miBarriga);
miBarriga += "  Vete al sonora y comprate uno!";
console.log(miBarriga);

// Acceder a una parte o un caracter dentro de un string

// charAt method

const wuTangClan = "Cash rules everything around me";
console.log(
  `${wuTangClan} is the chorus of the track C.R.E.A.M and on the string it represents ${wuTangClan.length} values inside the variable named wuTangClan`
);
console.log(wuTangClan.charAt(0));

// indexOf method

console.log(wuTangClan.indexOf("Cash"));

const wuTangClan2 = "Don't be sad, be happy!";
console.log(wuTangClan2.indexOf("be", 7));

// lastIndedOf Method

console.log(wuTangClan2.lastIndexOf("sad"));

// Repeat Method

console.log("Wu Tang ".repeat(20));

// SubString Method

console.log(wuTangClan.substring(0, 4));

// Slice Method

console.log(wuTangClan.slice(0, 4));

// Importante que si quieren slicear pocisiones negativas solo usan el slice ya que es el unico method que nos devuelve la informcacion correcta. los otros dos nos regresan un empty IDBCursorWithValue.

// BOOLEANS - DATA TYPES

// Booleanos son simplemente tipos de datos que son verdaderos o falsos :)

// Veamos sus operadores

// and &&  y condicional 
// or ||  "o" inclusivo 
// not  !  NO 


// OBJECTS - DATA TYPES - NON PRIMITIVE DATA

const theDoors = {
    singer: "Jim Morrison", 
    drummer: "John Densmore",
    guitarrist: "Roby Krieger",
    pianist: "Ray Manzarek",
}

