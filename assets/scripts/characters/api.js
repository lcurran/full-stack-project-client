'use strict';

const app = require('../app.js');

const listCharacters = () => {
  return $.ajax({
    url: app.host + '/characters',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateCharacter = (data) => {
  return $.ajax({
    url: app.host + '/characters/1',
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

module.exports = {
  listCharacters,
  updateCharacter,
};
