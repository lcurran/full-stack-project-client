'use strict';

const authEvents = require('./auth/events.js');
const characterEvents = require('./characters/events.js');
const ui = require('./auth/ui.js');
const rollerEvents = require('./dice-roller/events.js');


const navFormCollapse = () => {
  $('.nav-forms').collapse('hide');
};

// On document ready
$(() => {
  authEvents.addHandlers();
  characterEvents.addHandlers();
  $('.signed-in').hide();
  $('#sign-in-nav').on('click', navFormCollapse);
  $('#sign-up-nav').on('click', navFormCollapse);
  $('#change-password-nav').on('click', navFormCollapse);
  $('#roll-four').on('click', rollerEvents.rollD4);
  $('#roll-six').on('click', rollerEvents.rollD6);
  $('#roll-eight').on('click', rollerEvents.rollD8);
  $('#roll-ten').on('click', rollerEvents.rollD10);
  $('#roll-twelve').on('click', rollerEvents.rollD12);
  $('#roll-twenty').on('click', rollerEvents.rollD20);
  $('.dropdown-menu').find('form').click(function (e) {
   e.stopPropagation();
  // $('#cheat-code').on('submit', rollerEvents.cheatCode);
 });
});
