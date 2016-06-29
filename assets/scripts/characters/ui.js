'use strict';

const app = require('../app.js');
const characterInfoTemplate = require('../templates/character-info-view.handlebars');
const characterEditTemplate = require('../templates/character-edit-info.handlebars');

const clearCharacterList = () => {
  $('#character-list').html('')
};

const newCharacterSuccess = (data) => {
  // console.log(data)
  app.character = data.character
};

const viewCharacterSuccess = (data) => {
  console.log(data.character);
  $('#view-character').append(characterInfoTemplate(data.character));
};

const loadInfo = (data) => {
  console.log(data);
  console.log(data.character.name);
  $('#edit-info').prepend(characterEditTemplate(data.character));
};

const loadEditCharacter = (data) => {
  app.character = data.character
  loadInfo(data);
  $("#edit-info").on('submit')
};

const failure = (error) => {
  console.error(error);
};

const success = (data) => {
  console.log(data);
};

module.exports = {
  clearCharacterList,
  failure,
  success,
  newCharacterSuccess,
  viewCharacterSuccess,
  loadEditCharacter,
};
