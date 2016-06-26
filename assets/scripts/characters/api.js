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

const getSkills = () => {
  return $.ajax({
    url: app.host + '/skills',
    method: "GET"
  });
};

const getStats = () => {
  return $.ajax({
    url: app.host + '/stats',
    method: "GET"
  });
};

const getSpells = () => {
  return $.ajax({
    url: app.host + '/spells',
    method: "GET"
  });
};

module.exports = {
  listCharacters,
  updateCharacter,
  getSkills,
  getStats,
  getSpells,
};
