// Usando Async Await

// Es una funcion que basicamente espera por la respuesta de otr funcion, o mas abstracto es un logica que esepra por  otra logica.

// En nuestro caso, el papa esperara por lo que vel el hijo!!!
// Podemos asumir que el papa es asyncornico y el hijo es la promesa? ??

/// Dentro de la funcion asyncronica que en este caso es el papa, usaremos el keyword ASYNC y ""AWAIT" y como esto es syntax de JS, el lenguaje lo reconoce.

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

const fatherWillDecide = async () => {
  const weather = await sonCheckseather;
  if (weather === "Sunny") {
    console.log(`Lets go fishing!`);
  } else if (weather === "Rainy") {
    console.log(
      `Yo, we dont have any info, lets just stay and listen to the Wu!`
    );
  }
};

fatherWillDecide();
