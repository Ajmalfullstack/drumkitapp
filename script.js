"use strict";
// AVAILABLE ElementInternal
// ---------------------------------------------------------------------
const tom1 = document.querySelector(".a");
const tom2 = document.querySelector(".s");
const tom3 = document.querySelector(".d");
const tom4 = document.querySelector(".f");
const snare = document.querySelector(".l");
const crash = document.querySelector(".k");
const kick = document.querySelector(".j");

// Functions
// ---------------------------------------------------------------------
const animateElement = function (element) {
  element.classList.add("pressed");
  setTimeout(function () {
    element.classList.remove("pressed");
  }, 60);
};

const playsound = function (soundSource) {
  const soundName = new Audio(soundSource);
  soundName.play();
};

const bothAction = function (element, soundSource) {
  animateElement(element);
  playsound(soundSource);
};

// The working
// ---------------------------------------------------------------------

tom1.addEventListener("click", function () {
  bothAction(tom1, "sounds/tom-1.mp3");
});
tom2.addEventListener("click", function () {
  bothAction(tom2, "sounds/tom-2.mp3");
});
tom3.addEventListener("click", function () {
  bothAction(tom3, "sounds/tom-3.mp3");
});
tom4.addEventListener("click", function () {
  bothAction(tom4, "sounds/tom-4.mp3");
});
snare.addEventListener("click", function () {
  bothAction(snare, "sounds/snare.mp3");
});
crash.addEventListener("click", function () {
  bothAction(crash, "sounds/crash.mp3");
});
kick.addEventListener("click", function () {
  bothAction(kick, "sounds/kick-bass.mp3");
});

document.addEventListener("keydown", function (event) {
  const alphabet = event.key;
  if (alphabet === "a") {
    bothAction(tom1, "sounds/tom-1.mp3");
  } else if (alphabet === "s") {
    bothAction(tom2, "sounds/tom-2.mp3");
  } else if (alphabet === "d") {
    bothAction(tom3, "sounds/tom-3.mp3");
  } else if (alphabet === "f") {
    bothAction(tom4, "sounds/tom-4.mp3");
  } else if (alphabet === "h") {
    bothAction(snare, "sounds/snare.mp3");
  } else if (alphabet === "k") {
    bothAction(crash, "sounds/crash.mp3");
  } else if (alphabet === "j") {
    bothAction(kick, "sounds/kick-bass.mp3");
  } else {
    `${alphabet} was pressed`;
  }
});
