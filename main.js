"use strict";
const button = document.querySelector(".js-button");
const numberSelected = document.querySelector(".js-introNumber");
const clueInput = document.querySelector(".js-clue");
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

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
  if (numberValue() >= 1 && numberValue() <= 100) {
    console.log("esto funciona bien");
    console.log(randomNumber);
    console.log(numberValue());
    console.log(clueValue());
    if (numberValue() == randomNumber) {
      console.log("has acertado");
      console.log(clueValue());
    } else if (numberValue() > randomNumber) {
      console.log("demasiado alto");
      console.log(clueValue());
    } else if (numberValue() > randomNumber) {
      console.log("ddemasiado bajo");
      console.log(clueValue());
    }
  } else {
    console.log("el número debe estar entre 1 y 100");
    console.log(clueValue());
  }
}

button.addEventListener("click", handlerClick);
