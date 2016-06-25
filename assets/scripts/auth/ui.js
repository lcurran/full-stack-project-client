'use strict';

const app = require('../app.js');
const characters = require('../characters/events.js')

const failure = (error) => {
  console.error(error);
};

const navFormCollapse = () => {
  $('.nav-forms').collapse('hide');
};

const signUpFail = () => {
  $('#error-modal').modal('show');
  $('#error-modal').find('.modal-body p').text('Failed to create user. Please try again.');
  $('#sign-up').find('input:text').val('');
  $('#sign-up').find('input:password').val('');
};

const signUpSuccess = () => {
  navFormCollapse();
  $('#sign-in').collapse('show');
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.signed-in').show();
  $('.signed-out').hide();
  navFormCollapse();
  characters.onListCharacters();
};

const signInFail = () => {
  $('#error-modal').modal('show');
  $('#error-modal').find('.modal-body p').text('Incorrect sign in information');
  $('#sign-in').find('input:text').val('');
  $('#sign-in').find('input:password').val('');
};

const signOutSuccess = () => {
  app.user = null;
  $('.signed-out').show();
  $('.signed-in').hide();
};

const changePasswordSuccess = () => {
  $('#success-modal').modal('show');
  navFormCollapse();
  $('#success-modal').find('.modal-body p').text('You have updated your password.');
};

const changePasswordFail = () => {
  $('#error-modal').modal('show');
  $('#error-modal').find('.modal-body p').text('Failed to change password. Please try again.');
  $('#change-password').find('input:text').val('');
  $('#change-password').find('input:password').val('');
};

const authUiHandlers = () => {
  $('#sign-in-nav').on('click', navFormCollapse);
  $('#sign-up-nav').on('click', navFormCollapse);
  $('#change-password-nav').on('click', navFormCollapse);
  };


module.exports = {
  failure,
  // success,
  signInSuccess,
  signInFail,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFail,
  signUpFail,
  signUpSuccess,
  authUiHandlers,
  navFormCollapse,

};
