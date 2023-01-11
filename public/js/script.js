const main = document.querySelector("main");
const divjs = document.createElement("div");
const pjs = document.createElement("p");
pjs.innerHTML = "div js";
divjs.appendChild(pjs);
main.appendChild(divjs);