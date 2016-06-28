'use strict';

const app = require('../app.js');
const characterInfoTemplate = require('../templates/character-info-view.handlebars');
const characterStatTemplate = require('../templates/character-stat-view.handlebars');
const characterSkillTemplate = require('../templates/character-skill-view.handlebars');

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
};
