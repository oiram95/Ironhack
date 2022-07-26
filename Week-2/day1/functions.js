// function sayHello(nombre, edad, ubicacion, maquina) {
//   return `Hola mi nombre ${nombre}, tengo ${edad}, estyo viviendo en ${ubicacion} y mi computadora vendria siendo una ${maquina}`;
// }
// sayhello();

// console.log(sayHello("Anton", "30", "Barcelona", "MacbookPro"));

// Multiple Returns

// function printName(name) {
//   if (name.length === 0) {
//     return "Please provide a valid name!";
//   }

//   return `Name is ${name}.`;
// }
// console.log(printName("Anton"));

// Multiple Returns inside an object

// function getUserInfo(firstName, lastName) {
//   const userInfo = {
//     firstName: firstName,
//     lastName: lastName,
//   };
//   using the return method in order to retrieve the information from the function, if return method is not used you can run the function yet, you will get an undefinied printed on your console.
//   return userInfo;
// }

// console.log(getUserInfo("ana", "martinez"));

// printName("");
// printName("George");

// Multplie Values 2
// function getUserInfo(firstName, lastName) {
//   const userInfo = {
//     firstName: firstName,
//     lastName: lastName,
//   };

//   return userInfo;
// }

// console.log(getUserInfo("ana", "martinez"));

// const userData = getUserInfo("ana", "martinez");
// const firstName = userData.firstName;
// console.log(firstName); // => ana

// function getFavorites(fav1, fav2, fav3) {
//   const favorites = [fav1, fav2, fav3];

//   return favorites;
// }

// console.log(getFavorites("javascript", "html", "css"));

// const favoritesArray = getFavorites("javascript", "html", "css");
// const favorite1 = favoritesArray[0];
// const favorite3 = favoritesArray[2];
// console.log(favorite1, favorite3);
