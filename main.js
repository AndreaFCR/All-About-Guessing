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
  return Number(numberSelectedValue);
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
    console.log("se ha introducido un número del 1 al 100");
    console.log(randomNumber); //lee el random number
    console.log(numberValue()); //lee el valor introducido

    if (numberValue() === randomNumber) {
      console.log("has acertado");
    } else if (numberValue() > randomNumber) {
      console.log("demasiado alto");
    } else if (numberValue() > randomNumber) {
      console.log("demasiado bajo");
    } else {
      console.log("no está leyendo la equivalencia");
    }
  } else {
    console.log("el número debe estar entre 1 y 100");
  }
}

button.addEventListener("click", handlerClick);
