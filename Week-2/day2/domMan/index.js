let paragraph = document.getElementById("paragraph");

console.log(paragraph);

let links = document.getElementsByClassName("link");
console.log(links);

let paragraphId = paragraph.getAttribute("id");
paragraph.setAttribute("id", "info-paragraphs");

console.log(paragraphId);

// ADD AN ATTRIBUTE TO THE DOM ELEMENT
let aTag = document.getElementById("google-link");
aTag.setAttribute("target", "_blank");

// REMOVE AN ATTRIBUTE FROM THE DOM ELEMENT
let aTag2 = document.getElementById("facebook-link");
aTag2.removeAttribute("class");
aTag2.setAttribute("class", "MyCoolClass");

// CREATING ELEMENTS FROM JS
let h2Tag = document.createElement("h2");
h2Tag.innerHTML = "I love Turtles";

let parent = document.getElementsByTagName("body")[0];
parent.appendChild(h2Tag);

// ALternate way of creating textNodes
let text = document.createTextNode("This text is created dynamically  ");
parent.appendChild(text);

// Adding text or elements before another element
let h1Tag = document.createElement("h1");
h1Tag.innerHTML = "Heading 1 - comes before Heading 2";
parent.insertBefore(h1Tag, h2Tag);

// Removing an existing Element of the dom

// let theParagraph = document.getElementById("paragraph");
// parent.removeChild(theParagraph);

// Removing the content within the element by setting up to an empty variable.
// let paragraph2PTag = document.querySelector("#paragraph2");
// paragraph2PTag.innerHTML = "";

// EVENTS

// Simple Event to log into the console
const button = document.getElementById("add-item-button");
button.onclick = function () {
  console.log("adding an element to the list");
};

// Manipulating the dom
const btn = document.getElementById("btn");
btn.addEventListener("click", function master() {
  var johnGuitar = document.getElementsByClassName("frusciante");
  johnGuitar[0].innerHTML =
    "You need to play about 10,000 hours to ahieve such virtuosismo";
});
// showcase using template literalls on how to inject html into this

// to add to list simple example
const addToList = document.getElementById("add-item-button");
addToList.onclick = function () {
  var listItem = document.getElementById("items-list");
  listItem.innerHTML = `
    <li>Item Number</li>
    `;
};

// INPUT MANIPULATION
let sendButton = document.getElementById("send-btn");
// move the input inside the function (this step is optional):
sendButton.onclick = function () {
  let input = document.getElementsByTagName("input")[0];
  console.log(input.value);
};

// Getting the current node Object

[...document.querySelectorAll(".list li")].forEach((li) => {
  li.onclick = function () {
    console.log(li.innerHTML);
  };
});
