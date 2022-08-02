// Usando Callbacks

const sonCheckseather = () => {
  const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 2);
    const result = possibleOutcome[randomNumber];
    console.log(`Son the weather is ${result}`);
    // el papa siempre decide!
    fatherWillDecide(result);
  }, 200);
};

// Basandonos en l a respuesta del hijo, el padre toma un decision en base a la misma.

const fatherWillDecide = (weather) => {
  console.log(`Father says:`);
  if (weather === "Sunny") {
    console.log(`Lets go fishing!!!`);
  } else if (weather === "Rainy") {
    console.log(`Lets just stay home and we play some playstation`);
  } else {
    console.log(
      `Son since we dont have any weather info, I just rather keep it chill and stay home and play playstation.`
    );
  }
};

sonCheckseather();
