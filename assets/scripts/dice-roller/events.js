'use strict';

const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

const rollD4 = () => {
  let roll = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  console.log(roll);
  ui.displayRoll(roll);
};

const rollD6 = () => {
  let roll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  console.log(roll);
  ui.displayRoll(roll);
};

const rollD8 = () => {
  let roll = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  console.log(roll);
  ui.displayRoll(roll);
};

const rollD10 = () => {
  let roll = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  console.log(roll);
  ui.displayRoll(roll);
};

const rollD12 = () => {
  let roll = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log(roll);
  ui.displayRoll(roll);
};

const rollD20 = () => {
  let roll = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  console.log(roll);
  ui.displayRoll(roll);
};
// 
// const cheatCode = (event) => {
//   event.preventDefault();
//   let code = getFormFields(event.target);
//   console.log(code)
//   if (code == "up up down down left right left right B A") {
//     $('#roll-twenty').bind('click', ui.displayRoll(20));
//     $('#cheat-code').addClass('has-success');
//     $('#cheat-code').removeClass('has-error');
//   } else {
//     $('#cheat-code').addClass('has-error');
//   }
// };

module.exports = {
  rollD4,
  rollD6,
  rollD8,
  rollD10,
  rollD12,
  rollD20,
  // cheatCode,
};
