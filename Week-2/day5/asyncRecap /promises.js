// Usando promesas

// Como a alternativa a callbacks, ES6 introdujo las promesas a JS.

// Idea es sencilla, es un metodo nuevo de JS  que contiene 2 funciones

// 1ra Funcion - Resuelve / Reolve - Se llama cuando una tarea es exitosa(couando el hijo suba al arbol y revisa el estado del tiempo. Independiente del estado del tiempo.)

// 2do Funcion = Rechaza . Rejects - se llama cuando nos encontramos con cualquiere error (el hijo nunca se pudo subir al arbol)

const sonCheckseather = new Promise((resolve, reject) => {
  setTimeout(() => {
    const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
    const randomNumber = Math.floor(Math.random() * 2);
    const result = possibleOutcome[randomNumber];
    console.log(`Son the weather is ${result}`);

    //Tanto rainy como sunny son las useCases que estaremos resolviendo dentro del resolve
    if (result === "Sunny" || result === "Rainy") {
      resolve(result);
      // El caso de que el hijo no se pueda montar en el arbol es lo que estaremos rechazando
    } else {
      reject(new Error(`I cant tell you what the weather would be latter....`));
    }
  }, 200);
});

const fatherWillDecide = sonCheckseather.then((weather) => {
  if (weather === "Sunny") {
    console.log(`Lets go fishing`);
  } else if (weather === "Rainy") {
    console.log(`Lets saty home`);
  }
});
