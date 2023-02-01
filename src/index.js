console.log("testing index.js webpack");

const contentDiv = document.querySelector(".content");
const testH1 = document.createElement("h1");
testH1.textContent = "HELLO WORLD ...TEST FROM WEBPACK INDEX.JS DOM MANIP";
contentDiv.appendChild(testH1);