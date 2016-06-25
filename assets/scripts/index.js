'use strict';

const authEvents = require('./auth/events.js');
const characterEvents = require('./characters/events.js');
const ui = require('./auth/ui.js');

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
});
