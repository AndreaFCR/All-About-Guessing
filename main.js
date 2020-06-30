"use strict";
const button = document.querySelector(".js-button");
const numberSelected = document.querySelector(".js-introNumber");
const clueInput = document.querySelector(".js-clue");
const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function numberValue() {
  const numberSelectedValue = numberSelected.value;
  return numberSelectedValue;
}

function clueValue() {
  const clueInputValue = clueInput.value;
  return clueInputValue;
}

function handlerClick(ev) {
  ev.preventDefault();
  numberValue();
  clueValue();
  console.log("esto funciona");
//   if (randomNumber === getValue()) {
//   }
// }

console.log(clueValue());
console.log(getValue());

button.addEventListener("click", handlerClick);
