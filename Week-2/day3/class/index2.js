const button = document.querySelector("#btn");
button.onclick = function () {
  alert("Wu Tang Clan is the coolest in the world!");
};
console.log(button);

// Rgulr function that is exported to html - without using any querySelector or basically any type of dom selector on JS
//   function onClickHandler() {
//     alert("Nas is the king of Brooklyn, Hip Hop");
//   }

const onClickHandler = () => {
  alert("Nas is the king of Brooklyn, Hip Hop");
};
