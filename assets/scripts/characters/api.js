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

const newCharacter = (data) => {
  return $.ajax({
    url: app.host + '/characters/',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  })
};

const newStat = (data) => {
  return $.ajax({
    url: app.host + '/character_stats/',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  });
};

const updateStat = (data) => {
  return $.ajax({
    url: app.host + '/character_stats/' + app.character.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  });
};

const newSkill = (data) => {
  return $.ajax({
    url: app.host + '/character_skills/',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  });
};

const updateSkill = (data) => {
  return $.ajax({
    url: app.host + '/character_skills/' + app.character.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  });
};

const addSpell = (data) => {
  return $.ajax({
    url: app.host + '/character_spells/',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  });
};

const deleteCharacter = (id) => {
  return $.ajax({
    url: app.host + '/characters/' + id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const viewCharacter = (id) => {
  return $.ajax({
    url: app.host + '/characters/' + id,
    method: "GET"
  });
};

const editCharacter = (data) => {
  return $.ajax({
    url: app.host + '/characters/' + app.character.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  });
};

module.exports = {
  listCharacters,
  updateCharacter,
  getSkills,
  getStats,
  getSpells,
  newCharacter,
  newStat,
  newSkill,
  addSpell,
  deleteCharacter,
  viewCharacter,
  editCharacter,
  updateStat,
  updateSkill,
};
