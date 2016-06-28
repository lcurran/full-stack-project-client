'use strict';

const authEvents = require('./auth/events.js');
const characterEvents = require('./characters/events.js');
const ui = require('./auth/ui.js');
const rollerEvents = require('./dice-roller/events.js');
const formSaveEvents = require('./characters/form-save-events.js');


const navFormCollapse = () => {
  $('.nav-forms').collapse('hide');
};

// On document ready
$(() => {
  authEvents.addHandlers();
  characterEvents.addHandlers();
  formSaveEvents.addHandlers();
  rollerEvents.addHandlers();
  $('.signed-in').hide();
  $('#sign-in-nav').on('click', navFormCollapse);
  $('#sign-up-nav').on('click', navFormCollapse);
  $('#change-password-nav').on('click', navFormCollapse);
  $('.dropdown-menu').find('form').click(function (e) {
   e.stopPropagation();
 });
});
