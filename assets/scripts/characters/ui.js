'use strict';

const app = require('../app.js');
const characterInfoTemplate = require('../templates/character-info-view.handlebars');
const characterEditTemplate = require('../templates/character-edit-info.handlebars');
const characterListingTemplate = require('../templates/character-listing.handlebars');
const skillRow = require('../templates/skills-form.handlebars');
const statRow = require('../templates/stats-form.handlebars');
const spellForm = require('../templates/spells-form.handlebars');

const listCharacters = (characters) => {
  if (characters) {
      $('#character-list').append(characterListingTemplate(characters));

    };
};

const newCharacterSuccess = (data) => {
  app.character = data.character;
};

const viewCharacterSuccess = (data) => {
  console.log(data.character);
  $('#view-character').append(characterInfoTemplate(data.character));
};

const loadEditCharacter = (data) => {
  app.character = data.character;
  // $('#edit-character-tab').show();
  $('#edit-info').prepend(characterEditTemplate(data.character));
};

const statsForm = (stats) => {
  $('.stats').append(statRow(stats));
};

const skillsForm = (skills) => {
  $('.skills').append(skillRow(skills));
};

const spellsForm = (spells) => {
  $('.spells').append(spellForm(spells));
};

const failure = (error) => {
  console.error(error);
};

const success = (data) => {
  console.log(data);
};

module.exports = {
  failure,
  success,
  viewCharacterSuccess,
  loadEditCharacter,
  listCharacters,
  statsForm,
  skillsForm,
  spellsForm,
  newCharacterSuccess,
};
