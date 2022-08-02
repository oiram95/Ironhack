// Promise es una expresion que se resulve en un valor

// Since we are decalring initially a variable that runs a funciton, therotically the sonChecksWeather runs only once ad we want to be able to re-use it :)

// USing a tryCatch

const sonChecksWeather = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
      const randomNumber = Math.floor(Math.random() * 2);
      const result = possibleOutcome[randomNumber];
      console.log(`Son the weather is ${result}`);

      //Tanto rainy como sunny estaran dentro del resolve
      if (result === "Sunny" || result === "Rainy") {
        resolve(result);
      } else {
        reject(new Error(`I cant tell you what the weather would be later...`));
      }
    }, 200);
  });

const fatherWillDecide = async () => {
  try {
    const weather = await sonChecksWeather();
    if (weather === "Sunny") {
      console.log(`Yeah, lets go fishing`);
    } else if (weather === "Rainy") {
      console.log(
        `Since we dont have any information lets, just stay inside today!`
      );
    }
  } catch (error) {
    console.error(error);
  }
};

fatherWillDecide();
fatherWillDecide();
fatherWillDecide();
fatherWillDecide();
