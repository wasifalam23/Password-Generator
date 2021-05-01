"use strict";

const btnPass = document.querySelector(`.btn`);
const input = document.querySelector(`.input-main`);
const btnCopy = document.querySelector(`.icon-copy`);

const inputLength = document.querySelector(`.input-length`);
const uppercaseBox = document.querySelector(`.input-uppercase`);
const lowercaseBox = document.querySelector(`.input-lowercase`);
const numbersBox = document.querySelector(`.input-numbers`);
const symbolBox = document.querySelector(`.input-symbols`);

let uppercaseL = ``;
uppercaseBox.addEventListener(`change`, function () {
   if (this.checked) {
      uppercaseL = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
   } else {
      uppercaseL = ``;
   }
});

let lowercaseL = ``;
lowercaseBox.addEventListener(`change`, function () {
   if (this.checked) {
      lowercaseL = `abcdefghijklmnopqrstuvwxyz`;
   } else {
      lowercaseL = ``;
   }
});

let numbers = ``;
numbersBox.addEventListener(`change`, function () {
   if (this.checked) {
      numbers = `0123456789`;
   } else {
      numbers = ``;
   }
});

let symbols = ``;
symbolBox.addEventListener(`change`, function () {
   if (this.checked) {
      symbols = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;
   } else {
      symbols = ``;
   }
});

// CREATING RANDOM PASSWORD
let result = ``;
const randomPassword = function (length) {
   const allChar = `${uppercaseL}${lowercaseL}${numbers}${symbols}`;

   for (let i = 0; i < length; i++) {
      const randomChar = allChar.charAt(Math.floor(Math.random() * allChar.length));
      result += randomChar;
   }
};

// RENDERING RANDOM PASSWORD AND ALERT WINDOW
const renderRandomPassword = function () {
   const lengthPass = inputLength.value;

   randomPassword(lengthPass);
   input.value = result;
   result = ``;

   // CREATING ALERT WINDOW
   if (lengthPass === `` || +lengthPass < 0) alert(`Input valid password length !`);

   if (!uppercaseBox.checked && !lowercaseBox.checked && !numbersBox.checked && !symbolBox.checked) {
      alert(`Select atleast one case !`);
   }
};

// RENDERING RANDOM PASSWORD BY CLICKING BUTTON
btnPass.addEventListener(`click`, function () {
   renderRandomPassword();
});

// RENDERING RANDOM PASSWORD BY HITTING ENTER
document.addEventListener(`keydown`, function (e) {
   if (e.key === `Enter`) renderRandomPassword();
});

// CREATING COPY TEXT
const renderCopyText = function () {
   let inputValue = input.value;

   const copyText = document.createElement(`p`);
   copyText.classList.add(`text-copy`);

   copyText.textContent = inputValue === `` ? `Nothing to copy` : `Copied: ${inputValue}`;

   btnCopy.after(copyText);

   setTimeout(() => {
      copyText.remove();
   }, 1500);
};

// COPY FUNCTION
btnCopy.addEventListener(`click`, function () {
   input.select();
   input.setSelectionRange(0, 99999);
   document.execCommand(`copy`);

   renderCopyText();
});
