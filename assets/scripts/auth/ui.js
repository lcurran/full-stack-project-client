'use strict';

const app = require('../app.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.signed-out').hide();
  $('.signed-in').show();
  console.log(app.user);
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  $('.signed-out').show();
  $('.signed-in').hide();
  $('.content').text('');
  app.user = null;
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
