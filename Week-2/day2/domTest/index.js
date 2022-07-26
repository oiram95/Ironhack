// index.js

// verificamos primero para asegurar :)
console.log("Lets learn about Hip Hop");

// TO GET THE ELEMENTS USING IDS FROM DOM YOU CAN USE "getElementById"
let tupacDiv = document.getElementById("tupac");

console.log(tupacDiv);

// TO ADD TEXT TO DOM USE "innerHTML"
tupacDiv.innerHTML = "My name is Tupac Shakur and I am from Comptooon, CA.";

// set the HTML content of "Snoop Dog" to tupacDiv for example
let snoopDiv = document.getElementById("snoopDogg");
snoopDiv.innerHTML = tupacDiv.innerHTML;

// TO GET THE ELEMENTS USING CLASSES FROM DOM YOU CAN USE "getElementsByClassName"
let biggieDiv = document.getElementsByClassName("biggie");

console.log(biggieDiv);

let biggieArray = [...biggieDiv];
console.log(biggieArray);

// TO GET THE ELEMENTS USING HTML TAGS FROM DOM YOU CAN USE "getElementsByTagName"
let divs = document.getElementsByTagName("div");
console.log(divs);

// TO GET THE FIRST ELEMENT WITHIN THE DOCUMENT using "querySelector"
let outkast = document.querySelector(".outkast");
console.log(outkast);
let firstDiv = document.querySelector("div");
console.log(firstDiv);

// TO GET ALL OR A LIST ORF SPECIFIED ELEMENTS THAT YOU WANT TO POINT TO WE CAN USE THE QUERYSELECTOR "querySelectorAll"

let hipHopDivs = document.querySelectorAll("#tupac, .atcq");
console.log(hipHopDivs);

// .className Getting and Setting the Class Name
let tribeCalledQuestDiv = document.querySelector(".atcq");
console.log(tribeCalledQuestDiv.className);

let myHipHopElement = document.getElementsByClassName("atcq");
myHipHopElement.className = "hip-hop";
